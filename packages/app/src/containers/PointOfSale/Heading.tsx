import React from 'react'
import { Feather } from '@expo/vector-icons'
import styled from 'styled-components/native'

import { Row } from 'styles/styled'
import * as V from 'styles/variables'

const Container = styled(Row)`
  padding: 10px 20px;
  margin-bottom: -10px;
`

const Title = styled.Text`
  flex: 1;
  font-size: 18px;
  font-family: 'Poppins Medium';
`

interface Props {
  title: string
  visualizationMode: string
  onChangeVisualizationMode: (vMode: 'grid' | 'list') => void
}

const Heading: React.SFC<Props> = ({
  title,
  visualizationMode,
  onChangeVisualizationMode
}) => {
  return (
    <Container>
      <Title>{title}</Title>

      <Feather
        name="grid"
        color={visualizationMode === 'grid' ? V.Color.primary : '#757575'}
        size={20}
        onPress={() => onChangeVisualizationMode('grid')}
      />
      <Feather
        name="list"
        color={visualizationMode === 'list' ? V.Color.primary : '#757575'}
        size={25}
        style={{ marginLeft: 10 }}
        onPress={() => onChangeVisualizationMode('list')}
      />
    </Container>
  )
}

export default Heading
