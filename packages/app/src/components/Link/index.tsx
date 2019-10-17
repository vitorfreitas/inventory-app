import React from 'react'
import styled from 'styled-components/native'
import Ripple from 'react-native-material-ripple'

import * as V from 'styles/variables'
import { MediumText } from 'components/Typography/Text'

const Container = styled(Ripple).attrs({
  rippleOpacity: 0.1
})`
  padding: 6px 18px;
  border-radius: 4px;
  background: transparent;
`

const L = styled(MediumText)`
  font-size: 16px;
  color: ${V.Color.primary};
`

const Link = ({ children }) => (
  <Container>
    <L>{children}</L>
  </Container>
)

export default Link
