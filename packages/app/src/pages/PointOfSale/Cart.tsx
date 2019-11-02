import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import CartContainer from 'containers/Cart'
import { t } from 'locations'
import { IStore } from 'store'
import Product from 'shared/interfaces/product'

interface Props {
  navigation: {
    navigate: (page: string) => void
    goBack: () => void
  }
}

const Cart: React.SFC<Props> = ({ navigation }) => {
  const cart = useSelector((state: IStore) => state.cart)
  const dispatch = useDispatch()

  const handleCartSuccess = () => {
    dispatch({ type: 'CLEAN_CART' })
    navigation.goBack()
  }

  const handleRemoveItemFromCart = (item: Product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item })
  }

  useEffect(() => {
    if (cart.length === 0) navigation.goBack()
  }, [cart.length])

  return (
    <CartContainer
      t={t}
      cart={cart}
      onRemoveFromCart={handleRemoveItemFromCart}
      onSuccess={handleCartSuccess}
    />
  )
}

export default Cart
