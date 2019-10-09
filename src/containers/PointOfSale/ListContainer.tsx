import React from 'react'
import { FlatList } from 'react-native'

import ListItem from './ListItem'

const ListContainer: React.SFC = () => {
  const data = [1, 2, 3, 4, 5, 6]
  const _renderItem = ({ item, index }) => <ListItem />

  return (
    <FlatList
      data={data}
      contentContainerStyle={{ paddingHorizontal: 7, paddingTop: 10 }}
      nestedScrollEnabled
      renderItem={_renderItem}
      keyExtractor={item => item}
    />
  )
}

export default ListContainer
