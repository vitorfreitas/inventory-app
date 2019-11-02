import React from 'react'
import styled from 'styled-components/native'
import Ripple from 'react-native-material-ripple'

import * as V from 'styles/variables'
import { MediumText } from 'components/Typography/Text'

const Container = styled(Ripple).attrs({
  rippleOpacity: 0.1,
})`
  padding: 6px 18px;
  border-radius: 4px;
  background: transparent;

  align-items: center;
  align-self: flex-start;
  justify-content: center;
`

const L = styled(MediumText)`
  font-size: 16px;
  margin-top: 2px;
  color: ${V.Color.primary};
`

interface Props {
  onPress?: () => void
}

const Link: React.SFC<Props> = ({ children, onPress }) => (
  <Container onPress={onPress}>
    <L>{children}</L>
  </Container>
)

export default Link
