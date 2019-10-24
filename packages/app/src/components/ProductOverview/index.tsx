import React from 'react'
import styled from 'styled-components/native'

import { MediumText, NormalText } from 'components/Typography/Text'
import Product from 'shared/interfaces/product'
import ProductPicture from './ProductPicture'

const Container = styled.View`
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
    <ProductPicture />

    <NameAndPriceContainer>
      <Name>{product.name || 'Product name'}</Name>
      <Price>{product.price || 'R$ 0,00'}</Price>
    </NameAndPriceContainer>
  </Container>
)

export default ProductOverview
