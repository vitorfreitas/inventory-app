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
    navigate: (page: string) => void
  }
}

const PointOfSale: React.SFC<Props> = ({ navigation }) => {
  const { data } = useQuery(FETCH_USERS)

  return <PointOfSaleContainer t={t} data={data} navigate={navigation.navigate} />
}

const PointOfSaleStackNavigation = createStackNavigator(
  {
    PointOfSale,
    CreateProduct,
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: {},
  },
)

export default PointOfSaleStackNavigation
