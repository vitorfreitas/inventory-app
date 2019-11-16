import React from 'react'
import { View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import Ripple from 'react-native-material-ripple'
import styled from 'styled-components/native'

import Product from '@stock/shared/interfaces/product'

const Container = styled(Ripple).attrs({
  rippleOpacity: 0.1
})`
  width: 100%;
  border-radius: 4px;
  padding: 16px 24px;
  margin: 0 auto;
  flex-direction: row;
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
`

const Tip = styled.Text`
  font-size: 11px;
  font-family: 'Poppins';
  color: #9e9e9e;
  justify-content: center;
`

interface Props {
  data: Product
  t: (term) => string
  onPress: (product: Product) => void
  onLongPress: (product: Product) => void
}

const ListItem: React.SFC<Props> = ({ t, data, onPress, onLongPress }) => {
  const handleLongPress = () => onLongPress(data)
  const handlePress = () => onPress(data)

  return (
    <Container onPress={handlePress} onLongPress={handleLongPress}>
      {data.picture ? (
        <Picture source={{ uri: data.picture }} />
      ) : (
        <PicturePlaceholder />
      )}

      <DataContainer>
        <View>
          <Title>{data.name}</Title>

          <Tip>
            {t('pos.hold-tip')}
            <Feather name="chevron-right" />
          </Tip>
        </View>

        <Price>
          R$
          {data.price}
        </Price>
      </DataContainer>
    </Container>
  )
}

export default ListItem
