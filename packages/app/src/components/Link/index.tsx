import React from 'react'
import styled from 'styled-components/native'
import Ripple from 'react-native-material-ripple'

import * as V from 'styles/variables'
import { MediumText } from 'components/Typography/Text'

const Container = styled(Ripple).attrs({
  rippleOpacity: 0.1
})`
  padding: 6px 14px 4px;
  border-radius: 4px;
  background: transparent;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const L = styled(MediumText)<{ color: string }>`
  ${({ color }) => `
    font-size: 16px;
    color: ${color};
  `}
`

interface Props {
  onPress?: () => void
  icon?: any
  color?: string
}

const Link: React.SFC<Props> = ({ children, onPress, icon, color }) => (
  <Container onPress={onPress}>
    <L color={color || V.Color.primary}>{children}</L>

    {icon && icon}
  </Container>
)

export default Link
