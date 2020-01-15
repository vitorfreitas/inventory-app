import React, { useEffect, useState } from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { useSelector, useDispatch } from 'react-redux'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import * as Google from 'expo-google-app-auth'
import { AsyncStorage } from 'react-native'

import { t } from 'locations'
import PointOfSaleContainer from 'containers/PointOfSale'
import { IStore } from 'store'
import Product from '@inventory/shared/interfaces/product'
import CreateProduct from './CreateProduct'
import Ingredients from './Ingredients'
import Cart from './Cart'
import CreateBaseProduct from './CreateBaseProduct'
import { useAuth } from './hooks'

const FETCH_PRODUCTS = gql`
  query {
    products {
      id
      name
      price
    }
  }
`

interface Props {
  navigation: {
    navigate: (page: string) => void
  }
}

const PointOfSale: React.SFC<Props> = ({ navigation }) => {
  const [user, setUser] = useState(null)
  const token = useAuth(user)
  const { data } = useQuery<{ products: Product[] }>(FETCH_PRODUCTS, {
    pollInterval: token ? undefined : 1000
  })

  const cart = useSelector((state: IStore) => state.cart)
  const dispatch = useDispatch()

  const addItemsToCart = (product: Product, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, quantity } })
  }

  const openGoogleSignInDialog = async () => {
    // eslint-disable-next-line no-shadow
    const token = await AsyncStorage.getItem('token')
    if (token) return

    // eslint-disable-next-line no-shadow
    const { user }: any = await Google.logInAsync({
      iosClientId:
        '700747286293-e93mmjmoprvs5ja32kvmv188u76a9dq7.apps.googleusercontent.com',
      androidClientId:
        '700747286293-ch4b9kghfeemcrl24ifbnp40hvbtfuad.apps.googleusercontent.com',
      clientId:
        '700747286293-ch4b9kghfeemcrl24ifbnp40hvbtfuad.apps.googleusercontent.com'
    })

    setUser(user)
  }

  useEffect(() => {
    openGoogleSignInDialog()
  }, [])

  useEffect(() => {
    AsyncStorage.setItem('token', token)
  }, [token])

  return (
    <PointOfSaleContainer
      t={t}
      cart={cart}
      products={data?.products}
      onAddCartItem={addItemsToCart}
      navigate={navigation.navigate}
    />
  )
}

const PointOfSaleStackNavigation = createStackNavigator(
  {
    PointOfSale,
    CreateProduct,
    CreateBaseProduct,
    Ingredients,
    Cart
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: {}
  }
)

PointOfSaleStackNavigation.navigationOptions = ({ navigation }) => {
  const hideTabbarOn = ['CreateProduct', 'Ingredients']
  const { routeName } = navigation.state.routes[navigation.state.index]

  return {
    tabBarVisible: !hideTabbarOn.some(route => routeName == route)
  }
}

export default PointOfSaleStackNavigation
