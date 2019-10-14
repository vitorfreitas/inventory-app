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
  border-color: #eee;
  margin-bottom: 10px;
  border-bottom-width: 1px;
`

interface Props {
  data?: object
  navigate: (page: string) => void
  t: (key: string) => string
}

const HomeContainer: React.SFC<Props> = ({ t, data, navigate }) => {
  const [visualizationMode, setVisualizationMode] = useState('list')
  const [selectedProduct, setSelectedProduct] = useState(false)

  const openDescriptionModalOnLongPress = product => setSelectedProduct(product)

  const closeDescriptionModal = () => setSelectedProduct(false)

  const navigateToCreateProductPage = () => navigate('CreateProduct')

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
            t={t}
            onCreateProduct={navigateToCreateProductPage}
            products={products}
            onProductLongPress={openDescriptionModalOnLongPress}
            onChangeVisualizationMode={setVisualizationMode}
          />
        ) : (
          <ListContainer
            t={t}
            onCreateProduct={navigateToCreateProductPage}
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
