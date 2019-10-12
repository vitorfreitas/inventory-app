import React from 'react'
import { ScrollView, View } from 'react-native'

import ListItem from './ListItem'
import Heading from './Heading'

interface Props {
  t: (path) => string
  onChangeVisualizationMode: (vMode: 'grid' | 'list') => any
}

const ListContainer: React.SFC<Props> = ({ t, onChangeVisualizationMode }) => {
  const data = [1, 2, 3, 4, 5, 6]
  const _renderItem = (_, index) => <ListItem t={t} key={index} />

  return (
    <ScrollView>
      <View style={{ marginBottom: 10 }}>
        <Heading
          title="Products"
          visualizationMode="list"
          onChangeVisualizationMode={onChangeVisualizationMode}
        />
      </View>

      {data.map(_renderItem)}
    </ScrollView>
  )
}

export default ListContainer
