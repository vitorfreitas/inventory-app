import React from 'react'
import styled from 'styled-components/native'
import BackButton from './BackButton'
import * as V from 'styles/variables'
import { withNavigation } from 'react-navigation'

const Container = styled.View`
  width: 100%;
  height: 60px;
  background: #fff;
  padding: 10px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
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

interface Props {
  title: string
  withProfile?: boolean
  navigation?: any
  withBackButton?: boolean
}

const ButtonContainer = styled.View`
  height: 40px;
  width: 40px;
`

const Navbar: React.SFC<Props> = ({
  title,
  withProfile,
  navigation,
  withBackButton = true
}) => (
  <Container>
    {withBackButton ? <BackButton onPress={() => navigation.goBack()} /> : null}

    <Title>{title}</Title>
    <ButtonContainer>
      {withProfile ? (
        <Avatar
          source={{ uri: 'https://randomuser.me/api/portraits/men/22.jpg' }}
        />
      ) : null}
    </ButtonContainer>
  </Container>
)

export default withNavigation(Navbar)
