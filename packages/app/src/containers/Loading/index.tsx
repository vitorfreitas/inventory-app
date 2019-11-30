import React from 'react'
import { ActivityIndicator } from 'react-native'
import styled from 'styled-components'

import { BoldText } from 'components/Typography/Text'

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

interface Props {
  message: string
}

const LoadingContainer: React.SFC<Props> = ({ message }) => (
  <Container>
    <BoldText textAlign="center">{message}</BoldText>
    <ActivityIndicator size="large" style={{ marginTop: 10 }} />
  </Container>
)

export default LoadingContainer
