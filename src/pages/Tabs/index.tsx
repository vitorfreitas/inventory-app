import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Home from '../Home'

const tabBarIcons = {
  Home: 'home'
}

const TabNavigator = createBottomTabNavigator(
  {
    Home
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => (
        <AntDesign
          name={tabBarIcons[navigation.state.routeName]}
          size={32}
          color={tintColor}
        />
      ),
      tabBarOptions: {
        activeTintColor: '#05c46b',
        style: { height: 60, paddingTop: 5 },
        keyboardHidesTabBar: true,
        labelStyle: { fontWeight: 'bold', fontSize: 14 }
      }
    })
  }
)

const AppContainer = createAppContainer(TabNavigator)

export default AppContainer
