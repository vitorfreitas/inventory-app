import React, { Component } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { View } from 'react-native'
import { ApolloProvider } from 'react-apollo'
import * as Font from 'expo-font'

import store from 'store'
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
      <ReduxProvider store={store}>
        <ApolloProvider client={client}>
          <AppContainer />
        </ApolloProvider>
      </ReduxProvider>
    )
  }
}
