import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons'

import Navbar from '../../components/Navbar'
import GridContainer from './GridContainer'
import ListContainer from './ListContainer'
import { Content, Toolbar, SearchInput } from './styled'

interface Props {
  data?: object
  t: (key: string) => string
}

const HomeContainer: React.SFC<Props> = ({ t, data }) => {
  const [visualizationMode, setVisualizationMode] = useState('list')

  return (
    <>
      <Navbar title={t('navbar.sell')} />

      <Content>
        <Toolbar>
          <Feather name="search" size={25} />
          <SearchInput placeholder={t('pos.placeholder')} />
        </Toolbar>

        {visualizationMode === 'grid' ? <GridContainer /> : <ListContainer />}
      </Content>
    </>
  )
}

export default HomeContainer
