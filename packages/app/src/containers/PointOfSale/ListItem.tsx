import React from 'react'
import styled from 'styled-components/native'
import Ripple from 'react-native-material-ripple'
import { Feather } from '@expo/vector-icons'

import * as V from '@styles/variables'
import { Product } from '../../interfaces/product'

const Container = styled(Ripple).attrs({
  rippleOpacity: 0.1
})`
  width: 90%;
  height: 80px;
  elevation: 2;
  padding: 12px;
  margin: 0 auto;
  background: #fff;
  border-radius: 4px;

  flex-direction: row;
  margin-bottom: 12px;
`

const Picture = styled.Image`
  width: 30%;
  height: 100%;
  border-radius: 4px;
`

const DataContainer = styled.View`
  flex: 1;
  margin-left: 15px;
`

const Title = styled.Text`
  color: #333;
  font-size: 15px;
  font-family: 'Poppins Medium';
`

const Price = styled.Text`
  margin-bottom: -5px;
  color: #888;
  font-size: 14px;
  font-family: 'Poppins';
`

const Tip = styled.Text`
  font-size: 14px;
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
        <Price>R$ {data.price}</Price>
        <Title>{data.name}</Title>

        <Tip>
          {t('pos.hold-tip')}
          <Feather name="chevron-right" />
        </Tip>
      </DataContainer>
    </Container>
  )
}

export default ListItem
