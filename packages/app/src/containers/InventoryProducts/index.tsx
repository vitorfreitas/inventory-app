import React from 'react'
import { View } from 'react-native'
import ProductCard from './ProductCard'

type Props = {
  products: any[]
}

const renderProduct = (product, index) => (
  <ProductCard data={product} key={index} />
)

const InventoryProducts: React.SFC<Props> = ({ products }) => (
  <View>{products.map(renderProduct)}</View>
)

export default InventoryProducts
