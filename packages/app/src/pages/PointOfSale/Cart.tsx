import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { and, isNil, not, equals } from 'ramda'

import CartContainer from 'containers/Cart'
import { t } from 'locations'
import { IStore } from 'store'
import Product from '@stock/shared/interfaces/product'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

interface Props {
  navigation: {
    navigate: (page: string) => void
    goBack: () => void
  }
}

const CREATE_SALE = gql`
  mutation CreateSale($sale: SaleInput!) {
    createSale(sale: $sale) {
      id
    }
  }
`

const Cart: React.SFC<Props> = ({ navigation }) => {
  const [status, setStatus] = useState<
    'success' | 'error' | 'loading' | 'blank'
  >('blank')
  const [createSaleMutation, { data, loading }] = useMutation(CREATE_SALE)
  const cart = useSelector((state: IStore) => state.cart)
  const dispatch = useDispatch()

  const cleanCartAndGoBack = () => {
    dispatch({ type: 'CLEAN_CART' })
    navigation.goBack()
  }

  const removeItemFromCart = (item: Product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item })
  }

  const createSale = () => {
    const products = cart.map(item => ({
      id: item.product.id,
      quantity: item.quantity
    }))

    const sale = {
      products
    }

    createSaleMutation({ variables: { sale } })
  }

  if (and(not(isNil(data)), not(equals(status, 'success')))) {
    setStatus('success')
  }

  if (and(loading, not(equals(status, 'loading')))) {
    setStatus('loading')
  }

  useEffect(() => {
    if (cart.length === 0) navigation.goBack()
  }, [cart.length])

  return (
    <CartContainer
      t={t}
      cart={cart}
      status={status}
      onRemoveFromCart={removeItemFromCart}
      onSuccess={cleanCartAndGoBack}
      onSubmit={createSale}
    />
  )
}

export default Cart
