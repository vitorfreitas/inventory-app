import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import * as V from 'styles/variables'
import PointOfSale from '../PointOfSale'
import TabBar from './TabBar'
import Inventory from '../Inventory'
import Reports from '../Reports'
import TabIcon from './TabIcon'

const tabBarIcons = {
  PointOfSale: 'shopping-cart',
  Inventory: 'shopping-bag',
  Reports: 'bar-chart'
}

const TabNavigator = createBottomTabNavigator(
  {
    PointOfSale,
    Inventory,
    Reports
  },
  {
    tabBarComponent: TabBar,
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor, focused }) => (
        <TabIcon
          name={tabBarIcons[navigation.state.routeName]}
          focused={focused}
          color={tintColor}
        />
      )
    }),
    tabBarOptions: {
      keyboardHidesTabBar: true,
      activeTintColor: V.Color.primary
    }
  }
)

const AppContainer = createAppContainer(TabNavigator)

export default AppContainer
