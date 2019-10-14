import React from 'react'
import styled from 'styled-components/native'
import Ripple from 'react-native-material-ripple'
import { Feather } from '@expo/vector-icons'

import * as V from '@styles/variables'
import Product from 'shared/interfaces/product'
import { View } from 'react-native'

const Container = styled(Ripple).attrs({
  rippleOpacity: 0.1
})`
  width: 100%;
  height: 70px;
  padding: 12px;
  margin: 0 auto;
  flex-direction: row;
  padding-bottom: 10px;
`

const Picture = styled.Image`
  width: 80px;
  height: 55px;
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
  color: #333;
  font-size: 15px;
  font-family: 'Poppins Medium';
`

const Price = styled.Text`
  color: #888;
  font-size: 14px;
  font-family: 'Poppins';
`

const Tip = styled.Text`
  font-size: 12px;
  margin-top: -5px;
  font-family: 'Poppins';
  color: ${V.Color.primary};
`

interface Props {
  data: Product
  t: (term) => string
  onLongPress: (product) => void
}

const ListItem: React.SFC<Props> = ({ t, data, onLongPress }) => {
  const handleLongPress = () => {
    onLongPress(data)
  }

  return (
    <Container onLongPress={handleLongPress}>
      <Picture source={{ uri: data.picture }} />

      <DataContainer>
        <View>
          <Title>{data.name}</Title>

          <Tip>
            {t('pos.hold-tip')}
            <Feather name="chevron-right" />
          </Tip>
        </View>

        <Price>R$ {data.price}</Price>
      </DataContainer>
    </Container>
  )
}

export default ListItem
