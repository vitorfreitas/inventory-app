import React, { useState } from 'react'
import styled from 'styled-components/native'

import Navbar from 'components/Navbar'
import { MediumText, NormalText } from 'components/Typography/Text'
import TextInput from 'components/Form/TextInput'
import Button from 'components/Button'
import Link from 'components/Link'
import Container from 'components/Layout/Container'
import ProductPicture from './ProductPicture'

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

const Form = styled.View`
  padding: 20px;
`

const Footer = styled.View`
  margin-top: auto;

  width: 100%;
  padding: 0 20px;
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-between;
`

interface Props {
  t: (path: string) => string
}

const CreateProductContainer: React.SFC<Props> = ({ t }) => {
  const [product, setProduct] = useState({ name: '', price: '' })

  const handleInputChange = (field) => (value) => {
    setProduct({ ...product, [field]: value })
  }

  return (
    <Container>
      <Navbar title={t('pos.create.title')} />

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
          label="Preço"
          placeholder="R$ 0,00"
        />
      </Form>

      <Footer>
        <Link>Salvar</Link>
        <Button text="Composição" />
      </Footer>
    </Container>
  )
}

export default CreateProductContainer
