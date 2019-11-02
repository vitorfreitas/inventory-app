import React from 'react'
import styled from 'styled-components/native'
import Ripple from 'react-native-material-ripple'

import * as V from 'styles/variables'
import { MediumText } from 'components/Typography/Text'

const Container = styled(Ripple).attrs({
  rippleOpacity: 0.1,
})`
  width: 100%;
  padding: 8px 8px 6px;
  align-self: center;
  border-radius: 4px;
  background: ${V.Color.primary};
  border: 2px solid ${V.Color.primary};

  margin-top: auto;
`

const Text = styled(MediumText)`
  color: #fff;
  font-size: 18px;
  text-align: center;
`

interface Props {
  text: string
  onPress: () => void
}

const FinishPurchaseButton: React.SFC<Props> = ({ text, onPress }) => (
  <Container onPress={onPress}>
    <Text>{text}</Text>
  </Container>
)

export default FinishPurchaseButton
