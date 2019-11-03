import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { createStackNavigator } from 'react-navigation-stack'
import { useSelector, useDispatch } from 'react-redux'

import { t } from 'locations'
import PointOfSaleContainer from 'containers/PointOfSale'
import { IStore } from 'store'
import Product from 'shared/interfaces/product'
import CreateProduct from './CreateProduct'
import Ingredients from './Ingredients'
import Cart from './Cart'

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

const hideTabbarOn = ['CreateProduct', 'Ingredients']

const PointOfSaleStackNavigation = createStackNavigator(
  {
    PointOfSale,
    CreateProduct,
    Ingredients,
    Cart
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: {}
  }
)

PointOfSaleStackNavigation.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index]

  return {
    tabBarVisible: !hideTabbarOn.some(route => routeName == route)
  }
}
export default PointOfSaleStackNavigation
