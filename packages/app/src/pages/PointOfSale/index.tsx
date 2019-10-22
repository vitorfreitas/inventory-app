import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { createStackNavigator } from 'react-navigation-stack'

import { t } from 'locations'
import PointOfSaleContainer from 'containers/PointOfSale'
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
    navigate: () => void
  }
}

const PointOfSale: React.SFC<Props> = ({ navigation }) => {
  const { data } = useQuery(FETCH_USERS)

  return (
    <PointOfSaleContainer t={t} data={data} navigate={navigation.navigate} />
  )
}

const hideTabbarOn = ['CreateProduct']

const PointOfSaleStackNavigation = createStackNavigator(
  {
    PointOfSale,
    CreateProduct: {
      screen: CreateProduct
    }
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
