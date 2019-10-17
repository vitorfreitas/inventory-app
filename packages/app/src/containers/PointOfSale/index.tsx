import React, { useState } from 'react'

import { Toolbar } from 'styles/styled'
import Navbar from 'components/Navbar'
import SearchInput from 'components/SearchInput'
import { products } from 'mocks/products.json'

import GridContainer from './GridContainer'
import ListContainer from './ListContainer'
import Heading from './Heading'
import { Content } from './styled'
import DescriptionModal from './Description'

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

  const productListProps = {
    t,
    onCreateProduct: navigateToCreateProductPage,
    products,
    onProductLongPress: openDescriptionModalOnLongPress,
    onChangeVisualizationMode: setVisualizationMode
  }

  return (
    <>
      <Navbar title={t('navbar.sell')} />
      <Toolbar>
        <SearchInput placeholder={t('pos.placeholder')}></SearchInput>
      </Toolbar>
      <Content>
        <Heading
          title={t('pos.products')}
          onChangeVisualizationMode={setVisualizationMode}
          visualizationMode={visualizationMode}
        />

        {visualizationMode === 'grid' ? (
          <GridContainer {...productListProps} />
        ) : (
          <ListContainer {...productListProps} />
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
