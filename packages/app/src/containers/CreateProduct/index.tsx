import React, { useState } from 'react'
import styled from 'styled-components/native'
import { ScrollView } from 'react-native'

import Navbar from 'components/Navbar'
import { MediumText, NormalText } from 'components/Typography/Text'
import TextInput from 'components/Form/TextInput'
import Button from 'components/Button'
import Link from 'components/Link'
import Container from 'components/Layout/Container'
import { Text } from 'styles/styled'
import ProductPicture from './ProductPicture'
import Details from './Details'

const Content = styled.View`
  padding: 20px;
  background: #fafafa;
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
  flex: 1;
  margin-top: 12px;
  border: 1px solid #eee;
  background-color: #ffffff;
  padding: 12px 24px 16px 24px;
`

const FormTitle = styled(Text)`
  margin: 16px 0;
  font-family: 'Poppins Bold';
  font-size: 18px;
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

interface Props {
  t: (path: string) => string
}

const CreateProductContainer: React.SFC<Props> = ({ t }) => {
  const [detailsOpen, setDetailsOpen] = useState<boolean>(false)
  const [product, setProduct] = useState({
    name: '',
    price: '',
    quantity: '1',
    measurementUnit: 'un',
    minimumAmount: '1',
  })

  const handleInputChange = (field) => (value) => {
    setProduct({ ...product, [field]: value })
  }

  const toggleDetailsDialog = () => setDetailsOpen(!detailsOpen)

  const saveProduct = () => console.log(product)

  return (
    <>
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
        </ScrollView>

        <Footer>
          <Link onPress={toggleDetailsDialog}>Salvar</Link>

          <Button onPress={() => {}} text="Ingredientes" />
        </Footer>
      </Container>

      <Details
        {...product}
        open={detailsOpen}
        onClose={toggleDetailsDialog}
        onFinish={saveProduct}
        onQuantityChange={handleInputChange('quantity')}
        onChangeMeasurementUnit={handleInputChange('measurementUnit')}
        onMinimumAmountChange={handleInputChange('minimumAmount')}
      />
    </>
  )
}

export default CreateProductContainer
