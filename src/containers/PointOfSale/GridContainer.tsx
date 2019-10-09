import React, { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

import { ItemContainer } from './styled'
import GridItem from './GridItem'

const Content = styled.View`
  padding: 3px;
`

const AddProductItem = styled(ItemContainer)`
  background: #f1f2fa;
  align-items: center;
  justify-content: center;
`

const GridContainer: React.SFC = () => {
  const [products, setProducts] = useState([])

  const addProductItem = () => (
    <AddProductItem>
      <Feather name="plus" size={40} color="#d8d9e1" />
    </AddProductItem>
  )

  const createRows = array => {
    const curArray = [...array]

    while (curArray.length % 3 !== 0) {
      curArray.push({ isEmpty: true })
    }

    setProducts(curArray)
  }

  const _renderItem = ({ item, index }) =>
    index === 0 ? addProductItem() : <GridItem item={item} />

  useEffect(() => {
    createRows([1, 2, 3, 4, 5])
  }, [])

  return (
    <Content>
      <FlatList
        data={products}
        keyExtractor={item => item}
        numColumns={3}
        renderItem={_renderItem}
      />
    </Content>
  )
}

export default GridContainer
