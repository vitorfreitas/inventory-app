import React from 'react'
import { View } from 'react-native'
import Ripple from 'react-native-material-ripple'
import styled from 'styled-components/native'

import Product from '@stock/shared/interfaces/product'
import { Text } from 'styles/styled'
import { Color } from 'styles/variables'

const Container = styled(Ripple).attrs({
  rippleOpacity: 0.1
})`
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

const PicturePlaceholder = styled.View`
  background: #2c3e50;
  width: 60px;
  height: 50px;
  align-self: center;
  border-radius: 4px;s
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

const SmallText = styled(Text)`
  font-size: 11px;
  text-transform: uppercase;
  color: ${Color.primary};
`

const InfoItem = styled.View`
  align-items: flex-end;
`

interface Props {
  data: Product
  onPress: () => void
}

const ProductCard: React.SFC<Props> = ({ data, onPress }) => (
  <Container onPress={onPress}>
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
          <SmallText>Estoque</SmallText>
        </InfoItem>
      </DataContainer>
    </Heading>

    <ProductInfo />
  </Container>
)

export default ProductCard
