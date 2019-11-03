import React from 'react'
import { View } from 'react-native'

import ProductCard from './ProductCard'

type Props = {
  products: any[]
  onEdit: (product) => void
}

const renderProduct = (product, index, onPress) => (
  <ProductCard data={product} key={index} onPress={() => onPress(product)} />
)

const InventoryProducts: React.SFC<Props> = ({ products, onEdit }) => (
  <View>
    {products.map((product, index) => renderProduct(product, index, onEdit))}
  </View>
)

export default InventoryProducts
