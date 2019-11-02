import React from 'react'
import styled from 'styled-components/native'
import Ripple from 'react-native-material-ripple'

import * as V from 'styles/variables'

const Container = styled(Ripple)`
  border-radius: 4px;
  padding: 6px 18px;
  background: ${V.Color.primary};
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};

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
  disabled?: boolean
  onPress: (args?: any) => any
}

const Button: React.SFC<Props> = ({ text, onPress, disabled }) => (
  <Container onPress={onPress} disabled={disabled}>
    <Text>{text}</Text>
  </Container>
)

export default Button
