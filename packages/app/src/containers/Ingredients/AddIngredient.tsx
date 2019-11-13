import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import SelectInput from 'react-native-select-input-ios'
import { Feather } from '@expo/vector-icons'

import { BoldText, MediumText, NormalText } from 'components/Typography/Text'
import Button from 'components/Button'
import Link from 'components/Link'
import { IBaseProduct } from './interfaces'
import {
  AddProductContainer,
  AddProductItem,
  AddProductIcon,
  AddProductText
} from './styled'

const Modal = styled.Modal.attrs({
  transparent: true,
  animationType: 'fade'
})``

const Background = styled.View`
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Container = styled.View`
  width: 85%;
  background: #fff;
  margin-top: 30%;
  border-radius: 12px;
  align-self: center;
`

const Heading = styled.View`
  background: #f9f9f9;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`

const QuantityInput = styled.TextInput`
  font-size: 45px;
  align-self: center;
  text-align: center;
  margin-bottom: 10px;
`

const FormTitle = styled(BoldText)`
  font-size: 18px;
  margin: 34px auto 0;
`

const InputContainer = styled.View`
  height: 50px;
  padding: 8px 24px;
  flex-direction: row;
  align-items: center;
  border: 1px solid #eee;
  justify-content: space-between;
`

const PaddingContent = styled.View`
  padding: 8px 24px;
`

const Label = styled(MediumText)``

const SellByLabel = styled(NormalText)`
  color: #757575;
  text-align: center;
  margin-bottom: 18px;
  align-self: center;
`

const FooterButton = styled.View`
  width: 100%;
  padding: 18px;
  align-self: center;
  flex-direction: row;
  justify-content: space-between;
`

interface Props {
  open: boolean
  edit?: boolean
  defaultIngredient?: IBaseProduct
  ingredients: IBaseProduct[]
  t: (path: string) => string
  onClose: () => void
  onFinish: (ingredient: IBaseProduct) => void
  onEdit: (ingredient: IBaseProduct) => void
  onCreateBaseProduct: () => void
}

const AddIngredient: React.FC<Props> = ({
  t,
  ingredients,
  open,
  onClose,
  onFinish,
  onEdit,
  onCreateBaseProduct,
  defaultIngredient,
  edit
}) => {
  const mappedUnits = {
    Unit: t('pos.unit'),
    Gram: t('pos.gram'),
    Milliliter: t('pos.milliliter')
  }

  const initialIngredient = {
    quantity: '1',
    ...ingredients[0]
  }

  const [ingredient, setIngredient] = useState<IBaseProduct>(initialIngredient)

  const handleQuantityInputChange = (value: string) => {
    const valueToNumber = Number(value)

    if (isNaN(valueToNumber)) return
    if (valueToNumber < 0) return

    setIngredient({ ...ingredient, quantity: value })
  }

  const handleIngredientChange = (value: string) => {
    const { id, name, unit } = ingredients.find(
      ingredient => ingredient.name === value
    )

    setIngredient({
      ...ingredient,
      id,
      name,
      unit
    })
  }

  const handleFormSubmit = () => {
    edit ? onEdit(ingredient) : onFinish(ingredient)

    setIngredient(initialIngredient)
  }

  const formatToSelectPickerFormat = (ingredient: IBaseProduct) => ({
    label: ingredient.name,
    value: ingredient.name
  })

  useEffect(() => {
    if (edit) {
      setIngredient(defaultIngredient)
    }
  }, [edit])

  return (
    <Modal visible={open} onRequestClose={onClose}>
      <Background>
        <Container>
          <Heading>
            <FormTitle>{t('pos.create.ingredient-title')}</FormTitle>

            <QuantityInput
              autoFocus
              keyboardType="number-pad"
              value={ingredient.quantity}
              onChangeText={handleQuantityInputChange}
            />

            <SellByLabel>
              {`${t('pos.create.sell-by')}: ${mappedUnits[ingredient.unit]}`}
            </SellByLabel>
          </Heading>

          <InputContainer style={{ paddingRight: 0, borderBottomWidth: 0 }}>
            <Label>{t('pos.create.ingredients-label')}</Label>
            <SelectInput
              mode="dialog"
              style={{ width: '60%' }}
              labelStyle={{ color: '#bbb' }}
              value={ingredient.name}
              onSubmitEditing={handleIngredientChange}
              onValueChange={handleIngredientChange}
              options={ingredients.map(formatToSelectPickerFormat)}
            />
          </InputContainer>

          <PaddingContent>
            <AddProductContainer>
              <AddProductItem onPress={onCreateBaseProduct}>
                <AddProductIcon>
                  <Feather name="plus" size={18} color="#9e9e9e" />
                </AddProductIcon>
                <AddProductText>
                  {t('pos.create.create-ingredient')}
                </AddProductText>
              </AddProductItem>
            </AddProductContainer>
          </PaddingContent>

          <FooterButton>
            <Link onPress={onClose}>{t('pos.create.cancel')}</Link>

            <Button text={t('pos.create.finish')} onPress={handleFormSubmit} />
          </FooterButton>
        </Container>
      </Background>
    </Modal>
  )
}

export default AddIngredient
