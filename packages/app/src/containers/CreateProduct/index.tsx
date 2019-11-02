import React, { useState } from 'react'
import styled from 'styled-components/native'
import { ScrollView, Picker } from 'react-native'

import Navbar from 'components/Navbar'
import { MediumText, NormalText } from 'components/Typography/Text'
import TextInput from 'components/Form/TextInput'
import Button from 'components/Button'
import Link from 'components/Link'
import Container from 'components/Layout/Container'
import ProductPicture from './ProductPicture'
import { Text } from 'styles/styled'

const Content = styled.View`
  padding: 20px;
  background: #fafafa;
`

const RowInput = styled(TextInput)`
  flex: 1;
  margin: 0px 2px;
`

const ProductOverview = styled.View`
  align-items: center;
  flex-direction: row;
`

const Name = styled(MediumText)`
  font-size: 16px;
`

const Price = styled(NormalText)`
  color: #757575;
`

const NameAndPriceContainer = styled.View`
  margin-left: 12px;
`

const Form = styled.KeyboardAvoidingView`
  padding: 12px 24px 16px 24px;
  background-color: #ffffff;
  border: 1px solid #eee;
  margin-top: 12px;
  flex: 1;
`

const FormTitle = styled(Text)`
  margin: 16px 0;
  font-family: 'Poppins Bold';
  font-size: 18px;
`

const CustomPicker = styled(Picker)`
  width: 100px;
  height: 30px;
  border-bottom-color: #eee;
  border-bottom-width: 1px;
`

const Footer = styled.View`
  width: 100%;
  padding: 8px 20px;
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-top-width: 1px;
  border-top-color: #eee;
`

const Row = styled.View`
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 12px;
`

interface Props {
  t: (path: string) => string
}

const CreateProductContainer: React.SFC<Props> = ({ t }) => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    cost: '',
    inventoryQuantity: '',
    measurementUnity: 'un',
    minimumQuantity: '1'
  })

  const handleInputChange = field => value => {
    setProduct({ ...product, [field]: value })
  }

  return (
    <Container>
      <Navbar title={t('pos.create.title')} />

      <ScrollView style={{ paddingBottom: 16 }}>
        <Content>
          <ProductOverview>
            <ProductPicture />

            <NameAndPriceContainer>
              <Name>{product.name || 'Product name'}</Name>
              <Price>{product.price || 'R$ 0,00'}</Price>
            </NameAndPriceContainer>
          </ProductOverview>
        </Content>

        <Form>
          <FormTitle>Informações do produto</FormTitle>
          <TextInput
            onChange={handleInputChange('name')}
            value={product.name}
            label="Nome"
            placeholder="ex.: Pizza de mozzarela"
          />
          <TextInput
            mask="money"
            type="number-pad"
            onChange={handleInputChange('price')}
            value={product.price}
            label="Preço de venda"
            placeholder="R$ 0,00"
          />
        </Form>
        <Form>
          <FormTitle>Opcionais</FormTitle>

          <Row>
            <RowInput
              type="number-pad"
              onChange={handleInputChange('inventoryQuantity')}
              value={product.inventoryQuantity}
              label="Quantidade em estoque"
              placeholder={`10${product.measurementUnity}`}
            />

            <CustomPicker
              selectedValue={product.measurementUnity}
              onValueChange={handleInputChange('measurementUnity')}
            >
              <Picker.Item label="un" value="un" />
              <Picker.Item label="Kg" value="kg" />
              <Picker.Item label="G" value="g" />
              <Picker.Item label="L" value="l" />
              <Picker.Item label="ml" value="ml" />
            </CustomPicker>
          </Row>

          <Row>
            <TextInput
              onChange={handleInputChange('minimumQuantity')}
              value={product.minimumQuantity}
              label="Quantidade mínima em estoque"
              placeholder={`10${product.measurementUnity}`}
            />
            <Text>{product.measurementUnity}</Text>
          </Row>
        </Form>
      </ScrollView>

      <Footer>
        <Link>Salvar</Link>
        <Button text="Composição" />
      </Footer>
    </Container>
  )
}

export default CreateProductContainer
