import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { createStackNavigator } from 'react-navigation-stack'

import { t } from 'locations'
import PointOfSaleContainer from 'containers/PointOfSale'
import { useSelector, useDispatch } from 'react-redux'
import { IStore } from 'store'
import Product from 'shared/interfaces/product'
import Cart from './Cart'
import CreateProduct from './CreateProduct'

const FETCH_USERS = gql`
  {
    users {
      id
      name
      email
      age
      followedBy {
        name
      }
    }
  }
`

interface Props {
  navigation: {
    navigate: (page: string) => void
  }
}

const PointOfSale: React.SFC<Props> = ({ navigation }) => {
  const { data } = useQuery(FETCH_USERS)
  const cart = useSelector((state: IStore) => state.cart)
  const dispatch = useDispatch()

  const addItemsToCart = (product: Product, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, quantity } })
  }

  return (
    <PointOfSaleContainer
      t={t}
      data={data}
      cart={cart}
      onAddCartItem={addItemsToCart}
      navigate={navigation.navigate}
    />
  )
}

const PointOfSaleStackNavigation = createStackNavigator(
  {
    PointOfSale,
    CreateProduct,
    Cart,
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: {},
  },
)

export default PointOfSaleStackNavigation
