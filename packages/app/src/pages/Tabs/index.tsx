import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import PointOfSale from '../PointOfSale'
import TabBar from './TabBar'
import Inventory from '../Inventory'
import Metrics from '../Metrics'
import More from '../More'
import * as V from '@styles/variables'
import TabIcon from './TabIcon'

const tabBarIcons = {
  PointOfSale: 'shopping-cart',
  Inventory: 'shopping-bag',
  Metrics: 'bar-chart',
  More: 'more-horizontal'
}

const TabNavigator = createBottomTabNavigator(
  {
    PointOfSale,
    Inventory,
    Metrics,
    More
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
      ),
      tabBarOptions: {
        activeTintColor: V.Color.primary,
        style: { height: 60, paddingTop: 5 },
        labelStyle: { fontWeight: 'bold', fontSize: 14 }
      }
    })
  }
)

const AppContainer = createAppContainer(TabNavigator)

export default AppContainer
