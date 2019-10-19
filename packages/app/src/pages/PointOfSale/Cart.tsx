import React from 'react'
import { useSelector } from 'react-redux'

import CartContainer from 'containers/Cart'
import { t } from 'locations'
import { IStore } from 'store'

const Cart = () => {
  const cart = useSelector((state: IStore) => state.cart)

  return <CartContainer t={t} cart={cart} />
}

export default Cart
