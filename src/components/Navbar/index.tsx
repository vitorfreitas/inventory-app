import React from 'react'
import styled from 'styled-components/native'

import * as V from '../../styles/variables'

const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 10px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-color: #eee;
  border-bottom-width: 1px;
`

const Title = styled.Text`
  font-size: 20px;
  margin-top: 10px;
  font-family: 'Poppins Medium';
`

const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${V.Color.primary};
`

export default function Navbar() {
  return (
    <Container>
      <Title>Vender</Title>

      <Avatar
        source={{ uri: 'https://randomuser.me/api/portraits/men/22.jpg' }}
      />
    </Container>
  )
}
