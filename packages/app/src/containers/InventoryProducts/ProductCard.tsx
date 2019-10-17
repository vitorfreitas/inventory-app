import React from 'react'
import styled from 'styled-components/native'
import Ripple from 'react-native-material-ripple'
import Product from 'shared/interfaces/product'
import { View } from 'react-native'
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

const Tip = styled.Text`
  font-size: 11px;
  font-family: 'Poppins';
  color: #9e9e9e;
  justify-content: center;
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
}

const ListItem: React.SFC<Props> = ({ data }) => {
  return (
    <Container>
      <Heading>
        <Picture source={{ uri: data.picture }} />

        <DataContainer>
          <View>
            <Title>{data.name}</Title>
            <Price>R$ {data.price}</Price>
          </View>
          <InfoItem>
            <SmallText>Estoque</SmallText>
            <Text>45 kg</Text>
          </InfoItem>
        </DataContainer>
      </Heading>

      <ProductInfo></ProductInfo>
    </Container>
  )
}

export default ListItem
