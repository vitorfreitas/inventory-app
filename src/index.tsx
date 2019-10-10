import React, { useEffect, useState, Component } from 'react'
import { View } from 'react-native'
import { ApolloProvider } from 'react-apollo'
import * as Font from 'expo-font'

import AppContainer from './pages/Tabs'
import client from './graphql'

export default class App extends Component {
  public state = {
    fontIsLoaded: false
  }

  componentDidMount() {
    Font.loadAsync({
      Poppins: require('../assets/fonts/Poppins-Regular.ttf'),
      'Poppins Bold': require('../assets/fonts/Poppins-SemiBold.ttf'),
      'Poppins Medium': require('../assets/fonts/Poppins-Medium.ttf')
    }).then(() => this.setState({ fontIsLoaded: true }))
  }

  render() {
    const { fontIsLoaded } = this.state

    if (!fontIsLoaded) {
      return <View />
    }

    return (
      <ApolloProvider client={client}>
        <AppContainer />
      </ApolloProvider>
    )
  }
}
