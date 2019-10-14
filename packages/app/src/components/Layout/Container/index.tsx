import React from 'react'
import { View, Dimensions } from 'react-native'

const { height: deviceHeight } = Dimensions.get('window')
const tabBarHeight = 80

const Container: React.SFC = ({ children }) => (
  <View style={{ height: deviceHeight - tabBarHeight }}>{children}</View>
)

export default Container
