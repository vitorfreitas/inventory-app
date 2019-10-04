import React, { useEffect } from 'react'
import { Animated } from 'react-native'
import { Feather } from '@expo/vector-icons'

const AnimatedIcon = Animated.createAnimatedComponent(Feather)

interface Props {
  name: string
  color: string
  focused: boolean
}

const TabIcon: React.SFC<Props> = ({ name, color, focused }) => {
  const size = new Animated.Value(20) // 28

  useEffect(() => {
    const value = focused ? 28 : 20

    Animated.timing(size, {
      toValue: value,
      duration: 80
    }).start()
  }, [focused])

  return <AnimatedIcon name={name} color={color} style={{ fontSize: size }} />
}

export default TabIcon
