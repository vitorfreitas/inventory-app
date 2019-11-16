import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

import Product from '@stock/shared/interfaces/product'
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

const PicturePlaceholder = styled.View`
  background: #2c3e50;
  width: 60px;
  height: 50px;
  align-self: center;
  border-radius: 4px;s
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
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
`

const Quantity = styled(NormalText)`
  color: #757575;
  font-size: 16px;
  margin-bottom: -2px;
`

const RemoveFromCartButton = styled.TouchableOpacity`
  padding: 5px;
  margin-left: 12px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  border: 1px solid #757575;
`

interface Props {
  data: Product
  quantity: number
  onRemove: (item: Product) => void
}

const CartItem: React.SFC<Props> = ({ data, quantity, onRemove }) => (
  <Container>
    <Heading>
      {data.picture ? (
        <Picture source={{ uri: data.picture }} />
      ) : (
        <PicturePlaceholder />
      )}

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

          <RemoveFromCartButton onPress={() => onRemove(data)}>
            <Feather name="trash-2" size={18} color="#757575" />
          </RemoveFromCartButton>
        </InfoItem>
      </DataContainer>
    </Heading>

    <ProductInfo />
  </Container>
)

export default CartItem
