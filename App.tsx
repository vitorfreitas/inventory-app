import React from 'react'
import { ApolloProvider } from 'react-apollo'

import AppContainer from './src/pages/Tabs'
import client from './graphql'

export default function App() {
  return (
    <ApolloProvider client={client}>
      <AppContainer />
    </ApolloProvider>
  )
}
