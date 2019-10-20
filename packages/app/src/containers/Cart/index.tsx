import React, { useState } from 'react'
import { FlatList } from 'react-native'
import styled from 'styled-components/native'

import Container from 'components/Layout/Container'
import Navbar from 'components/Navbar'
import Link from 'components/Link'
import { SuccessDialog } from 'components/Dialogs'
import { ICartItem } from '../PointOfSale/interfaces'
import FinishPurchaseButton from './FinishPurchaseButton'
import ChooseClient from './ChooseClient'
import CartItem from './CartItem'

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
  onSuccess: () => void
  t: (path: string) => string
}

const CartContainer: React.SFC<Props> = ({ t, cart, onSuccess }) => {
  const [purchaseFinished, setPurchaseFinished] = useState(false)

  const productsPrice = cart.reduce((acc, cur) => acc + cur.product.price * cur.quantity, 0)
  const finishButtonText = `${t('pos.cart.finish-button')} = R$ ${productsPrice.toFixed(2)}`

  const handleSuccessDialogClose = () => {
    setPurchaseFinished(false)
    onSuccess()
  }

  return (
    <>
      <Container>
        <Navbar title={t('pos.cart.title')} />

        <FlatList
          data={cart}
          keyExtractor={(i) => i.product.picture}
          renderItem={({ item }) => <CartItem data={item.product} quantity={item.quantity} />}
        />

        <GutterBottom />

        <Footer>
          <Row>
            <ChooseClient />
            <Link>{t('pos.cart.discount')}</Link>
          </Row>

          <FinishPurchaseButton onPress={() => setPurchaseFinished(true)} text={finishButtonText} />
        </Footer>
      </Container>

      <SuccessDialog
        open={purchaseFinished}
        message={t('pos.cart.success')}
        onClose={handleSuccessDialogClose}
      />
    </>
  )
}

export default CartContainer
