import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import styled from 'styled-components/native'

import Navbar from '../../components/Navbar'
import GridContainer from './GridContainer'
import ListContainer from './ListContainer'
import { Content, Row, SearchInput } from './styled'
import DescriptionModal from './Description'
import { products } from './products.json'

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
  const [visualizationMode, setVisualizationMode] = useState('grid')
  const [selectedProduct, setSelectedProduct] = useState(true)

  const openDescriptionModalOnLongPress = product => setSelectedProduct(product)

  const closeDescriptionModal = () => setSelectedProduct(false)

  return (
    <>
      <Navbar title={t('navbar.sell')} />

      <Content>
        <Toolbar>
          <Feather name="search" size={25} />
          <SearchInput placeholder={t('pos.placeholder')} />
        </Toolbar>

        {visualizationMode === 'grid' ? (
          <GridContainer
            products={products}
            onProductLongPress={openDescriptionModalOnLongPress}
            onChangeVisualizationMode={setVisualizationMode}
          />
        ) : (
          <ListContainer
            t={t}
            products={products}
            onProductLongPress={openDescriptionModalOnLongPress}
            onChangeVisualizationMode={setVisualizationMode}
          />
        )}

        <DescriptionModal
          t={t}
          open={!!selectedProduct}
          onClose={closeDescriptionModal}
        />
      </Content>
    </>
  )
}

export default HomeContainer
