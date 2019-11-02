import React from 'react'
import styled from 'styled-components/native'

import { MediumText, NormalText } from 'components/Typography/Text'
import Product from 'shared/interfaces/product'
import ProductPicture from './ProductPicture'

const Container = styled.View`
  padding: 20px;
  border-color: #eee;
  background: #fafafa;
  border-bottom-width: 1px;
`

const Content = styled.View`
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

interface Props {
  product: Partial<Product>
}

const ProductOverview: React.SFC<Props> = ({ product }) => (
  <Container>
    <Content>
      <ProductPicture />

      <NameAndPriceContainer>
        <Name>{product.name || 'Product name'}</Name>
        <Price>{product.price || 'R$ 0,00'}</Price>
      </NameAndPriceContainer>
    </Content>
  </Container>
)

export default ProductOverview
