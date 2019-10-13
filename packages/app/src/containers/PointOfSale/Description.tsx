import React from 'react'
import { Modal } from 'react-native'
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import Ripple from 'react-native-material-ripple'

import { Row } from './styled'
import Button from '../../components/Button'
import NumberPicker from '../../components/NumberPicker'
import * as V from '../../styles/variables'

export const Background = styled.View`
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

const Picture = styled.Image`
  width: 100%;
  height: 150px;

  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`

const EditButton = styled(Ripple).attrs({
  rippleOpacity: 0.1
})`
  width: 50px;
  height: 50px;
  align-items: center;
  border-radius: 25px;
  justify-content: center;
  background: ${V.Color.primary};

  top: 120px;
  right: 20px;
  position: absolute;
`

const Heading = styled(Row)`
  padding: 30px 25px 25px;
`

const Title = styled.Text`
  color: #333;
  font-size: 18px;
  font-family: 'Poppins Bold';
`

const Price = styled.Text`
  color: #888;
  font-size: 16px;
  font-family: 'Poppins';
`

const CompositionContainer = styled.View`
  padding: 0 25px;
`

const CompositionName = styled.Text`
  font-family: 'Poppins Medium';
`

const CompositionValue = styled.Text`
  font-family: Poppins;
  color: #757575;
`

const Footer = styled(Row)`
  padding: 0 25px;

  bottom: 20px;
  position: absolute;
`

const SeeMore = styled.Text`
  font-size: 14px;
  margin-top: 8px;
  color: ${V.Color.primary};
  font-family: 'Poppins Medium';
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

const DescriptionModal: React.SFC<Props> = ({ open, onClose }) => {
  return (
    <Modal
      visible={open}
      onRequestClose={onClose}
      animationType="fade"
      transparent
    >
      <Background>
        <Container>
          <Picture
            source={{
              uri:
                'https://foodrevolution.org/wp-content/uploads/blog-featured_healthy_foods-20180306.jpg'
            }}
          />

          <EditButton>
            <Feather name="edit-3" color="#fff" size={20} />
          </EditButton>

          <Heading>
            <Title>Hamburguer</Title>
            <Price>R$ 25.00</Price>
          </Heading>

          <CompositionContainer>
            <Row>
              <CompositionName>Pão de Hamburguer</CompositionName>
              <CompositionValue>1 un</CompositionValue>
            </Row>

            <Row>
              <CompositionName>Pão de Hamburguer</CompositionName>
              <CompositionValue>1 un</CompositionValue>
            </Row>

            <Row>
              <CompositionName>Pão de Hamburguer</CompositionName>
              <CompositionValue>1 un</CompositionValue>
            </Row>

            <Row>
              <SeeMore>
                Ver mais
                <Feather name="chevron-right" />
              </SeeMore>
            </Row>
          </CompositionContainer>

          <Footer>
            <NumberPicker />
            <Button text="Adicionar"></Button>
          </Footer>
        </Container>

        <CloseModalButton onPress={onClose}>
          <Feather name="x" size={25} color="#757575" />
        </CloseModalButton>
      </Background>
    </Modal>
  )
}

export default DescriptionModal
