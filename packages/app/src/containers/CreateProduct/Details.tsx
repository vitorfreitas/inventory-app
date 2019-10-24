import React, { useRef } from 'react'
import styled from 'styled-components/native'
import SelectInput from 'react-native-select-input-ios'

import { BoldText, MediumText } from 'components/Typography/Text'
import Button from 'components/Button'
import Link from 'components/Link'

const Modal = styled.Modal.attrs({
  transparent: true,
  animationType: 'fade',
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

const QuantityInput = styled.TextInput`
  width: 20%;
  font-size: 45px;
  align-self: center;
  text-align: center;

  margin-bottom: 18px;
`

const FormTitle = styled(BoldText)`
  font-size: 18px;
  margin: 34px auto 0;
`

const InputContainer = styled.TouchableOpacity`
  height: 50px;
  padding: 8px 24px;
  flex-direction: row;
  align-items: center;
  border: 1px solid #eee;
  justify-content: space-between;
`

const Label = styled(MediumText)``

const RowInput = styled.TextInput`
  color: #bbb;
  font-size: 18px;
  margin-top: 2px;
  font-family: Poppins;
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
  quantity: string
  minimumAmount: string
  measurementUnit: string
  t: (path: string) => string
  onClose: () => void
  onFinish: () => void
  onQuantityChange: (value: string) => void
  onMinimumAmountChange: (value: string) => void
  onChangeMeasurementUnit: (value: string) => void
}

interface InputRef {
  current: {
    focus: () => void
  }
}

const unitOptions = [
  { label: 'Unidade', value: 'un' },
  { label: 'Grama', value: 'g' },
  { label: 'Mililitro', value: 'ml' },
]

const Details: React.SFC<Props> = ({
  t,
  open,
  onClose,
  onFinish,
  quantity,
  onChangeMeasurementUnit,
  minimumAmount,
  measurementUnit,
  onQuantityChange,
  onMinimumAmountChange,
}) => {
  const selectInputRef: InputRef = useRef()
  const minimumAmountRef: InputRef = useRef()

  return (
    <Modal visible={open} onRequestClose={onClose}>
      <Background>
        <Container>
          <Heading>
            <FormTitle>{t('pos.create.quantity-title')}</FormTitle>

            <QuantityInput
              autoFocus
              keyboardType="number-pad"
              value={quantity}
              onChangeText={onQuantityChange}
            />
          </Heading>

          <InputContainer
            onPress={() => selectInputRef.current.focus()}
            style={{ paddingRight: 0, borderBottomWidth: 0 }}
          >
            <Label>{t('pos.create.sell-by')}</Label>
            <SelectInput
              mode="dialog"
              ref={selectInputRef}
              style={{ width: '50%' }}
              labelStyle={{ color: '#bbb' }}
              value={measurementUnit}
              onValueChange={onChangeMeasurementUnit}
              options={unitOptions}
            />
          </InputContainer>

          <InputContainer onPress={() => minimumAmountRef.current.focus()}>
            <Label>{t('pos.create.minumum-qty')}</Label>
            <RowInput
              ref={minimumAmountRef as any}
              keyboardType="number-pad"
              onChangeText={onMinimumAmountChange}
              value={minimumAmount}
              placeholder="1un"
            />
          </InputContainer>

          <FooterButton>
            <Link onPress={onClose}>{t('pos.create.cancel')}</Link>

            <Button text={t('pos.create.finish')} onPress={onFinish} />
          </FooterButton>
        </Container>
      </Background>
    </Modal>
  )
}

export default Details
