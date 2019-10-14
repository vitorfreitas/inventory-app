import React, { ReactNode, useEffect, useState } from 'react'
import { Keyboard, View } from 'react-native'

import { TabBarContainer, TabBarIconContainer } from './styled'
import useKeyboard from 'hooks/keyboard'

interface Props {
  navigation: {
    state: {
      routes: any[]
      index: number
    }
  }
  activeTintColor: string
  inactiveTintColor: string
  getLabelText: ({ route }) => string
  onTabPress: ({ route }) => void
  renderIcon?: ({ route, focused, tintColor }) => ReactNode
}

const TabBar: React.FC<Props> = ({
  renderIcon,
  navigation,
  activeTintColor,
  inactiveTintColor,
  onTabPress
}) => {
  const keyboardVisible = useKeyboard()
  const { routes, index } = navigation.state

  const tabIsFocused = tabIndex => tabIndex === index
  const currentTintColor = tabIndex =>
    tabIsFocused(tabIndex) ? activeTintColor : inactiveTintColor

  if (keyboardVisible) {
    return <View />
  }

  return (
    <TabBarContainer>
      {routes.map((route, index) => (
        <TabBarIconContainer key={index} onPress={() => onTabPress({ route })}>
          {renderIcon({
            route,
            focused: tabIsFocused(index),
            tintColor: currentTintColor(index)
          })}
        </TabBarIconContainer>
      ))}
    </TabBarContainer>
  )
}

export default TabBar
