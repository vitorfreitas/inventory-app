import React, { useState } from 'react'
import { FlatList, Alert, AlertButton } from 'react-native'
import styled from 'styled-components/native'
import { equals } from 'ramda'

import Container from 'components/Layout/Container'
import Navbar from 'components/Navbar'
import Link from 'components/Link'
import { SuccessDialog } from 'components/Dialogs'
import Product from '@stock/shared/interfaces/product'
import { ICartItem } from '../PointOfSale/interfaces'
import FinishPurchaseButton from './FinishPurchaseButton'
import ChooseClient from './ChooseClient'
import CartItem from './CartItem'
import LoadingContainer from 'containers/Loading'

const Footer = styled.View`
  bottom: 0;
  width: 100%;
  background: #fff;
  position: absolute;
  border-color: #eee;
  padding: 0 10px 5px;
  border-top-width: 1px;
`

const Row = styled.View`
  margin: 5px 0 7px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const GutterBottom = styled.View`
  height: 125px;
`

interface Props {
  cart?: ICartItem[]
  status: 'success' | 'error' | 'loading' | 'blank'
  onSuccess: () => void
  onSubmit: () => void
  t: (path: string) => string
  onRemoveFromCart: (item: Product) => void
}

const CartContainer: React.SFC<Props> = ({
  t,
  cart,
  status,
  onSuccess,
  onSubmit,
  onRemoveFromCart
}) => {
  console.log(status)

  const productsPrice = cart.reduce(
    (acc, cur) => acc + cur.product.price * cur.quantity,
    0
  )
  const finishButtonText = `${t(
    'pos.cart.finish-button'
  )} = R$ ${productsPrice.toFixed(2)}`

  const handleRemoveFromCart = (item: Product) => {
    const title = t('pos.cart.remove-title')
    const message = t('pos.cart.remove-message')
    const okText = t('pos.cart.remove-ok')
    const cancelText = t('pos.cart.remove-cancel')

    const buttons: AlertButton[] = [
      { text: okText, onPress: () => onRemoveFromCart(item) },
      { text: cancelText }
    ]

    Alert.alert(title, message, buttons)
  }

  const _renderCartItem = ({ item }) => (
    <CartItem
      data={item.product}
      onRemove={handleRemoveFromCart}
      quantity={item.quantity}
    />
  )

  if (equals(status, 'loading')) {
    return <LoadingContainer message="Processando sua compra..." />
  }

  return (
    <>
      <Container>
        <Navbar title={t('pos.cart.title')} />

        <FlatList
          data={cart}
          keyExtractor={i => i.product.id}
          renderItem={_renderCartItem}
        />

        <GutterBottom />

        <Footer>
          <Row>
            <ChooseClient />
            <Link>{t('pos.cart.discount')}</Link>
          </Row>

          <FinishPurchaseButton onPress={onSubmit} text={finishButtonText} />
        </Footer>
      </Container>

      <SuccessDialog
        open={status === 'success'}
        message={t('pos.cart.success')}
        onClose={onSuccess}
      />
    </>
  )
}

export default CartContainer
