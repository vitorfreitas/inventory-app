import { useState, useEffect } from 'react'
import { Keyboard } from 'react-native'

export default function useKeyboard() {
  const [keyboardVisible, setKeyboardVisible] = useState()

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true))
    Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false))

    return () => {
      Keyboard.removeListener('keyboardDidShow', () => {})
      Keyboard.removeListener('keyboardDidHide', () => {})
    }
  })

  return keyboardVisible
}
