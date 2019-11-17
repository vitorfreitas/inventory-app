import React, { useRef, useState } from 'react'
import styled from 'styled-components/native'
import { TextInputMask } from 'react-native-masked-text'

import { BoldText, MediumText } from 'components/Typography/Text'
import Button from 'components/Button'
import Link from 'components/Link'

const Modal = styled.Modal.attrs({
  transparent: true,
  animationType: 'fade'
})``

const Background = styled.View`
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Container = styled.View`
  width: 85%;
  background: #fff;
  margin-top: 30%;
  border-radius: 12px;
  align-self: center;
`

const Heading = styled.View`
  background: #f9f9f9;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`

const QuantityInput = styled(TextInputMask)`
  font-size: 45px;
  align-self: center;
  text-align: center;

  margin-bottom: 18px;
`

const FormTitle = styled(BoldText)`
  font-size: 18px;
  margin: 34px auto 0;
`

const FooterButton = styled.View`
  width: 100%;
  padding: 18px;
  align-self: center;
  flex-direction: row;
  justify-content: space-between;
`

interface Props {
  open: boolean
  t: (path: string) => string
  onClose: () => void
  onFinish: (amount: number) => void
}

const Discount: React.FC<Props> = ({ t, open, onClose, onFinish }) => {
  const [amount, setAmount] = useState('0')
  const maskedInputRef = useRef(null)

  const convertAmountToNumberAndFinish = () => {
    const value = maskedInputRef.current.getRawValue()
    const valueToNumber = Number(value)

    if (isNaN(valueToNumber)) onFinish(0)
    if (valueToNumber < 0) onFinish(0)

    onFinish(valueToNumber)
  }

  return (
    <Modal visible={open} onRequestClose={onClose}>
      <Background>
        <Container>
          <Heading>
            <FormTitle>{t('pos.cart.discount.title')}</FormTitle>

            <QuantityInput
              ref={maskedInputRef}
              type="money"
              autoFocus
              keyboardType="number-pad"
              value={amount}
              onChangeText={value => setAmount(value)}
            />
          </Heading>

          <FooterButton>
            <Link onPress={onClose}>{t('pos.create.cancel')}</Link>

            <Button
              text={t('pos.create.finish')}
              onPress={convertAmountToNumberAndFinish}
            />
          </FooterButton>
        </Container>
      </Background>
    </Modal>
  )
}

export default Discount
