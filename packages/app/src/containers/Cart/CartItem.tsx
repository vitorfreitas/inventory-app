import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'

import Product from 'shared/interfaces/product'
import { NormalText } from 'components/Typography/Text'

const Container = styled.View`
  width: 100%;
  padding: 16px 24px;
  margin: 0 auto;
  padding-bottom: 10px;
  background: #fff;
  border-bottom-color: #eee;
  border-bottom-width: 1px;
`

const Picture = styled.Image`
  width: 60px;
  height: 50px;
  align-self: center;
  border-radius: 4px;
`

const DataContainer = styled.View`
  flex: 1;
  padding-top: 2px;
  margin-left: 12px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.Text`
  color: #212121;
  font-size: 14px;
  font-family: 'Poppins Medium';
`

const Price = styled.Text`
  font-size: 14px;
  font-family: 'Poppins';
  color: #757575;
`

const Heading = styled.View`
  flex-direction: row;
`

const ProductInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

const InfoItem = styled.View`
  align-items: flex-end;
`

const Quantity = styled(NormalText)`
  color: #757575;
`

interface Props {
  data: Product
  quantity: number
}

const CartItem: React.SFC<Props> = ({ data, quantity }) => (
  <Container>
    <Heading>
      <Picture source={{ uri: data.picture }} />

      <DataContainer>
        <View>
          <Title>{data.name}</Title>
          <Price>
            R$
            {data.price}
          </Price>
        </View>
        <InfoItem>
          <Quantity>{`${quantity}x`}</Quantity>
        </InfoItem>
      </DataContainer>
    </Heading>

    <ProductInfo />
  </Container>
)

export default CartItem
