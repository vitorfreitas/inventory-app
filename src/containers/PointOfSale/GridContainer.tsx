import React from 'react'
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { SectionGrid } from 'react-native-super-grid'

import { ItemContainer } from './styled'
import GridItem from './GridItem'
import Heading from './Heading'

const AddProductItem = styled(ItemContainer)`
  background: #f1f2fa;
  align-items: center;
  justify-content: center;
`

interface Props {
  onChangeVisualizationMode: (vMode: 'grid' | 'list') => void
}

const GridContainer: React.SFC<Props> = ({ onChangeVisualizationMode }) => {
  const addProductItem = () => (
    <AddProductItem>
      <Feather name="plus" size={40} color="#d8d9e1" />
    </AddProductItem>
  )

  const _renderItem = ({ item, index }) => {
    if (index === 0) return addProductItem()

    return <GridItem item={item} />
  }

  return (
    <SectionGrid
      itemDimension={90}
      spacing={5}
      sections={[
        { title: 'Products', data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] }
      ]}
      renderItem={_renderItem}
      renderSectionHeader={() => (
        <Heading
          title="Products"
          onChangeVisualizationMode={onChangeVisualizationMode}
          visualizationMode="grid"
        />
      )}
    />
  )
}

export default GridContainer
