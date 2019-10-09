import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

import HomeContainer from '../../containers/Home'
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

export default function Home() {
  const { data } = useQuery(FETCH_USERS)

  return <HomeContainer t={t} data={data} />
}
