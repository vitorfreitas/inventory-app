import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import CartContainer from 'containers/Cart'
import { t } from 'locations'
import { IStore } from 'store'

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

  return <CartContainer t={t} cart={cart} onSuccess={handleCartSuccess} />
}

export default Cart
