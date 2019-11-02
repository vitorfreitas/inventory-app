import React, { useState } from 'react'
import styled from 'styled-components/native'
import { ScrollView } from 'react-native'

import Navbar from 'components/Navbar'
import TextInput from 'components/Form/TextInput'
import Button from 'components/Button'
import Link from 'components/Link'
import Container from 'components/Layout/Container'
import ProductOverview from 'components/ProductOverview'
import { Text } from 'styles/styled'
import Details from './Details'

const Form = styled.KeyboardAvoidingView`
  flex: 1;
  border-top-width: 0;
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
  product: {
    name: string
    price: string
    quantity: string
    measurementUnit: string
    minimumAmount: string
  }
  t: (path: string) => string
  onSelectIngredients: () => void
  onChangeProduct: (product: any) => void
}

const CreateProductContainer: React.SFC<Props> = ({
  t,
  onSelectIngredients,
  product,
  onChangeProduct
}) => {
  const [detailsOpen, setDetailsOpen] = useState<boolean>(false)

  const handleInputChange = field => value => {
    onChangeProduct({ ...product, [field]: value })
  }

  const toggleDetailsDialog = () => setDetailsOpen(!detailsOpen)

  const saveProduct = () => console.log(product)

  return (
    <>
      <Container>
        <Navbar title={t('pos.create.title')} />

        <ScrollView style={{ paddingBottom: 16 }}>
          <ProductOverview product={product} />

          <Form>
            <FormTitle>{t('pos.create.form-title')}</FormTitle>
            <TextInput
              onChange={handleInputChange('name')}
              value={product.name}
              label={t('pos.create.name')}
              placeholder="ex.: Pizza de mozzarela"
            />
            <TextInput
              mask="money"
              type="number-pad"
              onChange={handleInputChange('price')}
              value={product.price}
              label={t('pos.create.price')}
              placeholder="R$ 0,00"
            />
          </Form>
        </ScrollView>

        <Footer>
          <Link onPress={toggleDetailsDialog}>{t('pos.create.save')}</Link>

          <Button
            disabled={!product.name || !product.price}
            onPress={onSelectIngredients}
            text={t('pos.create.composition')}
          />
        </Footer>
      </Container>

      <Details
        t={t}
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
