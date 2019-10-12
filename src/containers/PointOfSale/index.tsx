import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import styled from 'styled-components/native'

import Navbar from '../../components/Navbar'
import GridContainer from './GridContainer'
import ListContainer from './ListContainer'
import { Content, Row, SearchInput } from './styled'
import DescriptionModal from './Description'

const Toolbar = styled(Row)`
  padding: 15px;
  background: #fff;
  border-color: #eee;
  margin-bottom: 10px;
  border-bottom-width: 1px;
`

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

        {visualizationMode === 'grid' ? (
          <GridContainer onChangeVisualizationMode={setVisualizationMode} />
        ) : (
          <ListContainer
            t={t}
            onChangeVisualizationMode={setVisualizationMode}
          />
        )}

        <DescriptionModal open onClose={() => {}} />
      </Content>
    </>
  )
}

export default HomeContainer
