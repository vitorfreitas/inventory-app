import React, { useState } from 'react'
import { FlatList, Alert, AlertButton, View } from 'react-native'
import styled from 'styled-components/native'
import { equals } from 'ramda'
import { Feather } from '@expo/vector-icons'

import Container from 'components/Layout/Container'
import Navbar from 'components/Navbar'
import Link from 'components/Link'
import LoadingContainer from 'containers/Loading'
import { SuccessDialog } from 'components/Dialogs'
import Product from '@stock/shared/interfaces/product'
import * as V from 'styles/variables'
import { ICartItem } from '../PointOfSale/interfaces'
import FinishPurchaseButton from './FinishPurchaseButton'
import CartItem from './CartItem'
import Discount from './Discount'

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
  onChangeDiscount: (discount: number) => void
  t: (path: string) => string
  onRemoveFromCart: (item: Product) => void
}

const CartContainer: React.FC<Props> = ({
  t,
  cart,
  status,
  onSuccess,
  onSubmit,
  onChangeDiscount,
  onRemoveFromCart
}) => {
  const [discountIsOpen, setDiscountIsOpen] = useState<boolean>(false)
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

  const renderCartItem = ({ item }) => (
    <CartItem
      data={item.product}
      onRemove={handleRemoveFromCart}
      quantity={item.quantity}
    />
  )

  const updateDiscountAndCloseDialog = (discount: number) => {
    onChangeDiscount(discount)
    setDiscountIsOpen(false)
  }

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
          renderItem={renderCartItem}
        />

        <GutterBottom />

        <Footer>
          <Row>
            <View />

            <Link
              onPress={() => setDiscountIsOpen(true)}
              icon={
                <Feather
                  name="plus"
                  size={20}
                  color={V.Color.primary}
                  style={{ marginLeft: 4, marginTop: -4 }}
                />
              }
            >
              {t('pos.cart.discount.cta')}
            </Link>
          </Row>

          <FinishPurchaseButton onPress={onSubmit} text={finishButtonText} />
        </Footer>
      </Container>

      <SuccessDialog
        open={status === 'success'}
        message={t('pos.cart.success')}
        onClose={onSuccess}
      />

      <Discount
        t={t}
        open={discountIsOpen}
        onClose={() => setDiscountIsOpen(false)}
        onFinish={updateDiscountAndCloseDialog}
      />
    </>
  )
}

export default CartContainer
