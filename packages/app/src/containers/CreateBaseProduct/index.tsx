import React from 'react'
import styled from 'styled-components/native'
import SelectInput from 'react-native-select-input-ios'
import DatePicker from 'react-native-datepicker'

import { MediumText } from 'components/Typography/Text'
import TextInput from 'components/Form/TextInput'
import { IBaseProduct } from 'containers/Ingredients/interfaces'
import Link from 'components/Link'
import Button from 'components/Button'

const Container = styled.ScrollView`
  padding: 16px;
`

const InputContainer = styled.View`
  margin-bottom: 12px;
`

const Footer = styled.View`
  width: 100%;
  padding: 12px 20px;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-top-width: 1px;
  border-top-color: #eee;
  justify-content: space-between;
`

const ingredients: IBaseProduct[] = [
  {
    id: '1',
    name: 'Carne de Hambúrguer',
    quantity: '1',
    unit: 'un'
  },
  {
    id: '2',
    name: 'Tomate',
    quantity: '1',
    unit: 'un'
  },
  {
    id: '3',
    name: 'Gel de cabelo',
    quantity: '1',
    unit: 'g'
  },
  {
    id: '4',
    name: 'Pomada capilar',
    quantity: '1',
    unit: 'g'
  }
]

interface Props {
  currentBaseProduct: IBaseProduct
  onChangeInputField: (field: string, value: string) => void
  onSaveBaseProduct: () => void
}

const formatToSelectPickerFormat = (ingredient: IBaseProduct) => ({
  label: ingredient.name,
  value: ingredient.name
})

const CreateBaseProductContainer: React.SFC<Props> = ({
  currentBaseProduct,
  onChangeInputField,
  onSaveBaseProduct
}) => (
  <>
    <Container>
      <TextInput
        label="Nome do ingrediente"
        placeholder="Farinha de Mandioca"
        onChange={value => onChangeInputField('name', value)}
      />

      <InputContainer>
        <MediumText>Unidade</MediumText>
        <SelectInput
          mode="dialog"
          style={{ borderBottomWidth: 1, borderColor: '#e0e0e0' }}
          labelStyle={{ color: '#bbb' }}
          value={currentBaseProduct?.name}
          onSubmitEditing={value => onChangeInputField('unit', value)}
          onValueChange={value => onChangeInputField('unit', value)}
          options={ingredients.map(formatToSelectPickerFormat)}
        />
      </InputContainer>

      <TextInput
        label="Preço de custo"
        type="number-pad"
        mask="money"
        value={currentBaseProduct?.costPrice}
        placeholder="R$ 0,00"
        onChange={value => onChangeInputField('costPrice', value)}
      />

      <TextInput 
        label="Quantidade em estoque"
        placeholder="10"
        type="number-pad"
        mask="only-numbers"
        value={currentBaseProduct?.quantity}
        onChange={value => onChangeInputField('quantity', value)}
      />

      <TextInput 
        label="Quantidade mínima em estoque"
        placeholder="3"
        mask="only-numbers"
        type="number-pad"
        value={currentBaseProduct?.minQuantity}
        onChange={value => onChangeInputField('minQuantity', value)}
      />

      <InputContainer>
        <MediumText>Data de validade</MediumText>
        <DatePicker
          style={{ width: '100%' }}
          date={currentBaseProduct?.expirationDate}
          mode="date"
          placeholder="select date"
          format="DD/MM/YYYY"
          confirmBtnText="Salvar"
          cancelBtnText="Voltar"
          customStyles={{
            dateIcon: {
              display: 'none',
            },
            dateInput: {
              borderWidth: 0,
              borderBottomWidth: 1,
              borderColor: '#e0e0e0',
              justifyContent: 'center',
              alignItems: 'flex-start',
            },
            placeholderText: {
              textAlign: 'left',
            }
          }}
          onDateChange={(date) => onChangeInputField('expirationDate', date)}
        />
      </InputContainer>
    </Container>

    <Footer>
      <Link onPress={() => {}}>Voltar</Link>

      <Button
        onPress={onSaveBaseProduct}
        text="Salvar"
      />
    </Footer>
  </>
)

export default CreateBaseProductContainer
