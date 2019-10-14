import React from 'react'
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { SectionGrid } from 'react-native-super-grid'

import { ItemContainer } from './styled'
import GridItem from './GridItem'
import Heading from './Heading'
import Product from 'shared/interfaces/product'

const AddProductItem = styled(ItemContainer)`
  background: #f1f2fa;
  align-items: center;
  justify-content: center;
`

interface Props {
  products: Product[]
  onProductLongPress: (product: Product) => void
  onChangeVisualizationMode: (vMode: 'grid' | 'list') => void
}

const GridContainer: React.SFC<Props> = ({
  products,
  onProductLongPress,
  onChangeVisualizationMode
}) => {
  const addProductItem = () => (
    <AddProductItem>
      <Feather name="plus" size={40} color="#d8d9e1" />
    </AddProductItem>
  )

  const _renderItem = ({ item, index }) => {
    if (index === 0) return addProductItem()

    return <GridItem data={item} onLongPress={onProductLongPress} />
  }

  return (
    <SectionGrid
      itemDimension={90}
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
