import React from 'react'
import styled from 'styled-components/native'
import Ripple from 'react-native-material-ripple'

import * as V from '../../styles/variables'

const Container = styled(Ripple)`
  border-radius: 4;
  padding: 6px 18px;
  background: ${V.Color.primary};

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
}

const Button: React.SFC<Props> = ({ text }) => (
  <Container>
    <Text>{text}</Text>
  </Container>
)

export default Button
