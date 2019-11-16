import React from 'react'
import LottieView from 'lottie-react-native'

import Link from 'components/Link'
import { t } from 'locations'
import { Modal } from 'react-native'
import { Background, Container, Title, Message, Footer } from '../styled'

interface Props {
  open: boolean
  message: string
  onClose: () => void
}

const SuccessDialog: React.SFC<Props> = ({ open, message, onClose }) => (
  <Modal visible={open} onRequestClose={onClose} transparent>
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
