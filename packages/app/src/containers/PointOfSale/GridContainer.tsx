import React from 'react'
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { SectionGrid } from 'react-native-super-grid'

import Heading from './Heading'
import GridItem from './GridItem'
import { ItemContainer } from './styled'
import Product from 'shared/interfaces/product'

const AddProductItem = styled(ItemContainer)`
  align-items: center;
  background: #f4f4f4;
  justify-content: center;
`

interface Props {
  t: (path: string) => string
  products: Product[]
  onCreateProduct: () => void
  onProductLongPress: (product: Product) => void
  onChangeVisualizationMode: (vMode: 'grid' | 'list') => void
}

const GridContainer: React.SFC<Props> = ({
  t,
  products,
  onCreateProduct,
  onProductLongPress,
  onChangeVisualizationMode
}) => {
  const addProductItem = () => (
    <AddProductItem onPress={onCreateProduct}>
      <Feather name="plus" size={40} color="#d6d6d6" />
    </AddProductItem>
  )

  const _renderItem = ({ item, index }) => {
    if (index === 0) return addProductItem()

    return <GridItem data={item} onLongPress={onProductLongPress} />
  }

  return (
    <SectionGrid
      itemDimension={100}
      spacing={5}
      sections={[{ title: 'Products', data: products }]}
      renderItem={_renderItem}
      renderSectionHeader={() => (
        <Heading
          title={t('pos.products')}
          onChangeVisualizationMode={onChangeVisualizationMode}
          visualizationMode="grid"
        />
      )}
    />
  )
}

export default GridContainer
