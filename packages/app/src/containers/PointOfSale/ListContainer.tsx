import React from 'react'
import { ScrollView, View } from 'react-native'

import ListItem from './ListItem'
import Heading from './Heading'
import { Product } from '../../interfaces/product'

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
  const _renderItem = (product, index) => (
    <ListItem
      t={t}
      data={product}
      onLongPress={onProductLongPress}
      key={index}
    />
  )

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
