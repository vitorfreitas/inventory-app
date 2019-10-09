import React from 'react'
import { Feather } from '@expo/vector-icons'
import styled from 'styled-components/native'

import { Row } from './styled'
import * as V from '../../styles/variables'

interface Props {
  title: string
  visualizationMode: string
  onVisualizationModeChange: (vMode: 'grid' | 'list') => void
}

export const Title = styled.Text`
  flex: 1;
  font-size: 18px;
  font-family: Poppins;
`

const Heading: React.SFC<Props> = ({
  title,
  visualizationMode,
  onVisualizationModeChange
}) => {
  return (
    <Row>
      <Title>{title}</Title>

      <Feather
        name="grid"
        color={visualizationMode === 'grid' ? V.Color.primary : '#757575'}
        size={20}
        onPress={() => onVisualizationModeChange('grid')}
      />
      <Feather
        name="list"
        color={visualizationMode === 'list' ? V.Color.primary : '#757575'}
        size={25}
        style={{ marginLeft: 10 }}
        onPress={() => onVisualizationModeChange('list')}
      />
    </Row>
  )
}

export default Heading
