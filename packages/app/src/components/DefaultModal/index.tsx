import React from 'react'
import { Modal } from 'react-native'
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

const Background = styled.View`
  width: 100%;
  height: 100%;
  background: rgba(25, 81, 137, 0.79);

  top: 0;
  left: 0;
  position: absolute;
`

const Container = styled.View`
  width: 90%;
  elevation: 2;
  height: 460px;
  margin-top: 20%;
  background: #fff;
  align-self: center;
  border-radius: 6px;
`

const CloseModalButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 25px;
  align-items: center;
  border: 1px solid #eee;
  justify-content: center;

  bottom: 15px;
  align-self: center;
  position: absolute;
`

interface Props {
  open: boolean
  onClose: () => void
}

const DefaultModal: React.SFC<Props> = ({ open, onClose, children }) => {
  return (
    <Modal
      transparent
      visible={open}
      onRequestClose={onClose}
      animationType="slide"
    >
      <Background>
        <Container>{children}</Container>
        <CloseModalButton onPress={onClose}>
          <Feather name="x" size={25} color="#757575" />
        </CloseModalButton>
      </Background>
    </Modal>
  )
}

export default DefaultModal
