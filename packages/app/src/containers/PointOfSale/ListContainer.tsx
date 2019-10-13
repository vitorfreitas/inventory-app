import React from 'react'
import { ScrollView, View } from 'react-native'
import styled from 'styled-components/native'
import Ripple from 'react-native-material-ripple'
import { Feather } from '@expo/vector-icons'

import ListItem from './ListItem'
import Heading from './Heading'
import { Product } from '../../interfaces/product'

const AddProductItem = styled(Ripple)`
  width: 90%;
  height: 80px;
  margin: 0 auto;
  background: #f1f2fa;
  border-radius: 4px;
  margin-bottom: 12px;
  elevation: 2;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

const AddProductText = styled.Text`
  color: #d8d9e1;
  font-size: 20px;
  margin-top: 4px;
  font-family: Poppins;
`

interface Props {
  t: (path) => string
  products: Product[]
  onProductLongPress: (product) => void
  onChangeVisualizationMode: (vMode: 'grid' | 'list') => any
}

const ListContainer: React.SFC<Props> = ({
  t,
  products,
  onChangeVisualizationMode,
  onProductLongPress
}) => {
  const _renderItem = (product, index) => {
    if (index === 0) {
      return (
        <AddProductItem>
          <Feather name="plus" size={40} color="#d8d9e1" />
          <AddProductText>{t('pos.add')}</AddProductText>
        </AddProductItem>
      )
    }

    return (
      <ListItem
        t={t}
        data={product}
        onLongPress={onProductLongPress}
        key={index}
      />
    )
  }

  return (
    <ScrollView>
      <View style={{ marginBottom: 10 }}>
        <Heading
          title="Products"
          visualizationMode="list"
          onChangeVisualizationMode={onChangeVisualizationMode}
        />
      </View>

      {products.map(_renderItem)}
    </ScrollView>
  )
}

export default ListContainer
