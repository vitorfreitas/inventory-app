import React, { useEffect, useState } from 'react'
import { Animated } from 'react-native'
import { Feather } from '@expo/vector-icons'

const AnimatedIcon = Animated.createAnimatedComponent(Feather)
interface Props {
  name: string
  color: string
  focused: boolean
}

const TabIcon: React.SFC<Props> = ({ name, color, focused }) => {
  const [size] = useState(new Animated.Value(1))

  useEffect(() => {
    const value = focused ? 1.3 : 1

    Animated.timing(size, {
      toValue: value,
      duration: 80
    }).start()
  }, [focused])

  return (
    <AnimatedIcon
      name={name}
      color={color}
      size={20}
      style={{ transform: [{ scale: size }] }}
    />
  )
}

export default TabIcon
