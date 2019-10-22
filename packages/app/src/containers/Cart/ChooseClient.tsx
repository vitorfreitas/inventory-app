import React from 'react'
import styled from 'styled-components/native'
import { Picker } from 'react-native'

import { MediumText } from 'components/Typography/Text'

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`

const Avatar = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background: #ff5959;
  align-items: center;
  justify-content: center;
`

const AvatarText = styled(MediumText)`
  color: #fff;
  margin-bottom: -2px;
`

const ChooseClient = () => (
  <Container>
    <Avatar>
      <AvatarText>C</AvatarText>
    </Avatar>

    <Picker selectedValue="client" style={{ width: 120, height: 50 }}>
      <Picker.Item label="Cliente" value="client" />
      <Picker.Item label="Em Breve!" value="soon" />
    </Picker>
  </Container>
)

export default ChooseClient
