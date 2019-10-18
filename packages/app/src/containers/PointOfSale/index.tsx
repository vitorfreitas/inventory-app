import React, { useState } from 'react'

import { Toolbar } from 'styles/styled'
import Navbar from 'components/Navbar'
import SearchInput from 'components/SearchInput'
import { products } from 'mocks/products.json'

import Product from 'shared/interfaces/product'
import GridContainer from './GridContainer'
import ListContainer from './ListContainer'
import Heading from './Heading'
import { Content, GutterBottom } from './styled'
import DescriptionModal from './Description'
import CartButton from './CartButton'

interface Props {
  data?: object
  navigate: (page: string) => void
  t: (key: string) => string
}

interface CartItem {
  product: Product
  quantity: number
}

const HomeContainer: React.SFC<Props> = ({ t, data, navigate }) => {
  const [visualizationMode, setVisualizationMode] = useState<'list' | 'grid'>('list')
  const [selectedProduct, setSelectedProduct] = useState<Product | boolean>(false)
  const [cart, setCartItems] = useState<CartItem[]>([])

  const openDescriptionModalOnLongPress = (product: Product) => setSelectedProduct(product)

  const closeDescriptionModal = () => setSelectedProduct(false)

  const navigateToCreateProductPage = () => navigate('CreateProduct')

  const handleAddItemToCart = (item: Product, quantity = 1) => setCartItems([...cart, { product: item, quantity }])

  const productListProps = {
    t,
    products,
    onAddToCart: handleAddItemToCart,
    onCreateProduct: navigateToCreateProductPage,
    onProductLongPress: openDescriptionModalOnLongPress,
    onChangeVisualizationMode: setVisualizationMode,
  }

  return (
    <>
      <Navbar title={t('navbar.sell')} />

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
        onAddToCart={handleAddItemToCart}
        onClose={closeDescriptionModal}
      />

      <CartButton
        cartMessage={t('pos.cart.button-message')}
        emptyCartMessage={t('pos.cart.empty-cart')}
        cart={cart}
      />
    </>
  )
}

export default HomeContainer
