import React, { useState } from 'react'

import { Toolbar } from 'styles/styled'
import Navbar from 'components/Navbar'
import SearchInput from 'components/SearchInput'
import { products } from 'mocks/products.json'

import GridContainer from './GridContainer'
import ListContainer from './ListContainer'
import Heading from './Heading'
import { Content, GutterBottom } from './styled'
import DescriptionModal from './Description'
import CartButton from './CartButton'
import { ICartItem } from './interfaces'
import Product from '@stock/shared/interfaces/product'

interface Props {
  products: Product[]
  navigate: (page: string) => void
  t: (key: string) => string
  cart: ICartItem[]
  onAddCartItem: (item: Product, quantity?: number) => void
}

const HomeContainer: React.SFC<Props> = ({
  t,
  products,
  cart,
  onAddCartItem,
  navigate
}) => {
  const [visualizationMode, setVisualizationMode] = useState<'list' | 'grid'>(
    'list'
  )
  const [selectedProduct, setSelectedProduct] = useState<Product>(null)

  const openDescriptionModalOnLongPress = (product: Product) =>
    setSelectedProduct(product)

  const closeDescriptionModal = () => setSelectedProduct(null)

  const navigateToCreateProductPage = () => navigate('CreateProduct')

  const productListProps = {
    t,
    products,
    onAddToCart: onAddCartItem,
    onCreateProduct: navigateToCreateProductPage,
    onProductLongPress: openDescriptionModalOnLongPress,
    onChangeVisualizationMode: setVisualizationMode
  }

  return (
    <>
      <Navbar title={t('navbar.sell')} withProfile withBackButton={false} />

      <Toolbar>
        <SearchInput placeholder={t('pos.placeholder')} />
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

        <GutterBottom />
      </Content>

      <DescriptionModal
        t={t}
        product={selectedProduct}
        open={!!selectedProduct}
        onAddToCart={onAddCartItem}
        onClose={closeDescriptionModal}
      />

      <CartButton
        onPress={() => navigate('Cart')}
        cartMessage={t('pos.cart.button-message')}
        emptyCartMessage={t('pos.cart.empty-cart')}
        cart={cart}
      />
    </>
  )
}

export default HomeContainer
