import React from 'react'
import styled from 'styled-components/native'
import Ripple from 'react-native-material-ripple'

import { Color } from 'styles/variables'

const Container = styled(Ripple)`
  border-radius: 4;
  padding: 6px 18px;
  background: ${Color.primary};
  align-items: center;
  align-self: flex-start;
  justify-content: center;
`

const Text = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-top: 2px;
  font-family: 'Poppins Medium';
`

interface Props {
  text: string
  onPress?: (args?: any) => any
  fullWidth?: boolean
}

const Button: React.SFC<Props> = ({ text, onPress, fullWidth }) => (
  <Container onPress={onPress} style={{ width: fullWidth ? '100%' : null }}>
    <Text>{text}</Text>
  </Container>
)

export default Button
