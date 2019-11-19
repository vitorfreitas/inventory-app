import React from 'react'
import { View } from 'react-native'

import ProductCard from './ProductCard'
import Product from '@stock/shared/interfaces/product'
import LoadingContainer from 'containers/Loading'

type Props = {
  products: Product[]
  loading: boolean
  onEdit: (product) => void
}

const renderProduct = (product, onPress) => (
  <ProductCard
    data={product}
    key={product.id}
    onPress={() => onPress(product)}
  />
)

const InventoryProducts: React.SFC<Props> = ({ products, loading, onEdit }) => {
  if (loading) {
    return <LoadingContainer message="Buscando seus produtos..." />
  }

  return <View>{products.map(product => renderProduct(product, onEdit))}</View>
}

export default InventoryProducts
