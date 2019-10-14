import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

import PointOfSaleContainer from '../../containers/PointOfSale'
import { t } from '../../locations'

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

export default PointOfSale
