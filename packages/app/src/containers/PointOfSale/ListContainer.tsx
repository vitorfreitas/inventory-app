import React from 'react'
import { ScrollView, View } from 'react-native'
import styled from 'styled-components/native'
import Ripple from 'react-native-material-ripple'
import { Feather } from '@expo/vector-icons'

import ListItem from './ListItem'
import Heading from './Heading'
import Product from 'shared/interfaces/product'

const AddProductItem = styled(Ripple).attrs({
  rippleOpacity: 0.1
})`
  width: 100%;
  height: 70px;
  padding: 0 12px;
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

const AddProductIcon = styled.View`
  width: 80px;
  height: 55px;
  align-self: center;
  border-radius: 4px;
  background: #f4f4f4;

  align-items: center;
  justify-content: center;
`

const AddProductText = styled.Text`
  color: #d8d9e1;
  font-size: 16px;
  margin-top: 4px;
  margin-left: 17px;
  font-family: Poppins;
`

interface Props {
  t: (path) => string
  products: Product[]
  onCreateProduct: () => void
  onProductLongPress: (product) => void
  onChangeVisualizationMode: (vMode: 'grid' | 'list') => any
}

const ListContainer: React.SFC<Props> = ({
  t,
  products,
  onCreateProduct,
  onChangeVisualizationMode,
  onProductLongPress
}) => {
  const _renderItem = (product, index) => {
    if (index === 0) {
      return (
        <AddProductItem key={index} onPress={onCreateProduct}>
          <AddProductIcon>
            <Feather name="plus" size={25} color="#d6d6d6" />
          </AddProductIcon>
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
          title={t('pos.products')}
          visualizationMode="list"
          onChangeVisualizationMode={onChangeVisualizationMode}
        />
      </View>

      {products.map(_renderItem)}
    </ScrollView>
  )
}

export default ListContainer
