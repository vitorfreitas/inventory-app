import React from 'react'
import styled from 'styled-components/native'
import LottieView from 'lottie-react-native'

import { BoldText, NormalText } from 'components/Typography/Text'
import Link from 'components/Link'
import { t } from 'locations'

const Modal = styled.Modal.attrs({
  transparent: true,
  animationType: 'fade',
})``

const Background = styled.View`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);

  align-items: center;
  justify-content: center;

  top: 0;
  left: 0;
  position: absolute;
`

const Container = styled.View`
  width: 80%;
  height: 400px;
  padding: 12px;
  background: #fff;
  border-radius: 12px;
  align-items: center;
`

const Title = styled(BoldText)`
  color: #333;
  font-size: 28px;
  text-align: center;
`

const Message = styled(NormalText)`
  color: #757575;
  text-align: center;
`

const Footer = styled.View`
  margin-top: auto;
  align-items: center;
  justify-content: center;
`

interface Props {
  open: boolean
  message: string
  onClose: () => void
}

const SuccessDialog: React.SFC<Props> = ({ open, message, onClose }) => (
  <Modal visible={open} onRequestClose={onClose}>
    <Background>
      <Container>
        <LottieView
          autoPlay
          loop={false}
          style={{ width: '80%', alignSelf: 'center' }}
          source={require('../../../../assets/animations/1127-success.json')}
        />

        <Title>{t('dialogs.success')}</Title>
        <Message>{message}</Message>

        <Footer>
          <Link onPress={onClose}>Get back</Link>
        </Footer>
      </Container>
    </Background>
  </Modal>
)

export default SuccessDialog
