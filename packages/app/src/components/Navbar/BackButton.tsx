import React from 'react'
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import Ripple from 'react-native-material-ripple'

const Container = styled(Ripple)`
  width: 40px;
  height: 100%;
  justify-content: center;
`

interface Props {
  onPress: () => void
}

const BackButton = ({ onPress }: Props) => (
  <Container onPress={onPress}>
    <Feather name="arrow-left" size={20}></Feather>
  </Container>
)

export default BackButton
