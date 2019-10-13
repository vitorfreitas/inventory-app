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

export default function PointOfSale() {
  const { data } = useQuery(FETCH_USERS)

  return <PointOfSaleContainer t={t} data={data} />
}
