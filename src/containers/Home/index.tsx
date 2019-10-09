import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons'

import Navbar from '../../components/Navbar'
import { Content, Toolbar, SearchInput, Row, Heading } from './styled'
import GridContainer from './GridContainer'
import * as V from '../../styles/variables'

interface Props {
  data?: object
}

const HomeContainer: React.SFC<Props> = ({ data }) => {
  const [visualizationMode, setVisualizationMode] = useState('grid')

  return (
    <>
      <Navbar />

      <Content>
        <Toolbar>
          <Feather name="search" size={25} />
          <SearchInput placeholder="Procurando o que hoje?" />
        </Toolbar>

        <Row>
          <Heading>Produtos</Heading>

          <Feather
            name="grid"
            color={visualizationMode === 'grid' ? V.Color.primary : '#757575'}
            size={20}
            onPress={() => setVisualizationMode('grid')}
          />
          <Feather
            name="list"
            color={visualizationMode === 'list' ? V.Color.primary : '#757575'}
            size={25}
            style={{ marginLeft: 10 }}
            onPress={() => setVisualizationMode('list')}
          />
        </Row>

        <GridContainer />
      </Content>
    </>
  )
}

export default HomeContainer
