import React from 'react'
import styled from 'styled-components/native'
import Ripple from 'react-native-material-ripple'

import { MediumText, NormalText } from 'components/Typography/Text'
import * as V from 'styles/variables'
import Product from 'shared/interfaces/product'

const Container = styled(Ripple).attrs({
  rippleOpacity: 0.1,
})`
  width: 95%;
  padding: 8px 8px 6px;
  align-self: center;
  border-radius: 4px;
  background: ${V.Color.primary};
  border: 2px solid ${V.Color.primary};

  bottom: 10px;
  position: absolute;
`

const EmptyContainer = styled(Container)`
  background: #fff;
  border: 2px solid ${V.Color.primary};
`

const Text = styled(MediumText)<{ empty?: boolean }>`
  color: ${({ empty }) => (empty ? V.Color.primary : '#fff')};
  font-size: 18px;
  text-align: center;
`

const Badge = styled.View`
  width: 23px;
  height: 23px;
  border-radius: 15px;
  background: #e74c3c;
  align-items: center;
  justify-content: center;

  top: -8px;
  right: -5px;
  position: absolute;
`

const BadgeText = styled(NormalText)`
  color: #fff;
  text-align: center;
  margin-top: 2px; /* centralize */
`

interface Props {
  emptyCartMessage: string
  cartMessage: string
  cart: Product[]
}

const CartButton: React.SFC<Props> = ({ cart, cartMessage, emptyCartMessage }) => {
  const productsPrice = (): number => cart.reduce((acc, cur) => acc + cur.price, 0)

  if (cart.length === 0) {
    return (
      <EmptyContainer>
        <Text empty>{emptyCartMessage}</Text>

        <Badge>
          <BadgeText>0</BadgeText>
        </Badge>
      </EmptyContainer>
    )
  }

  return (
    <Container>
      <Text>
        {`${cartMessage} = R$`}
        {productsPrice().toFixed(2)}
      </Text>

      <Badge>
        <BadgeText>{cart.length}</BadgeText>
      </Badge>
    </Container>
  )
}

export default CartButton
