import React, { useState } from 'react'
import { TextInputMask } from 'react-native-masked-text'
import { StyleProp, ViewStyle } from 'react-native'

import styled from 'styled-components/native'
import { MediumText } from 'components/Typography/Text'
import * as V from 'styles/variables'

const Container = styled.View<{ width?: string }>`
  margin-top: 10px;
  margin-bottom: 12px;
`

const Label = styled(MediumText)`
  color: #333;
  font-size: 14px;
  margin-bottom: 8px;
`

const MaskedInput = styled(TextInputMask)<{ isFocused: boolean }>`
  color: #333;
  font-size: 16px;
  font-family: 'Poppins Medium';
  border-bottom-width: ${({ isFocused }) => (isFocused ? '2px' : '1px')};
  border-color: ${({ isFocused }) => (isFocused ? V.Color.primary : '#e0e0e0')};
`

const Input = styled.TextInput<{ isFocused: boolean }>`
  color: #333;
  font-size: 16px;
  font-family: 'Poppins Medium';
  border-bottom-width: ${({ isFocused }) => (isFocused ? '2px' : '1px')};
  border-color: ${({ isFocused }) => (isFocused ? V.Color.primary : '#e0e0e0')};
`

interface Props {
  label: string
  type?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad'
  mask?:
    | 'cel-phone'
    | 'cnpj'
    | 'cpf'
    | 'credit-card'
    | 'datetime'
    | 'money'
    | 'only-numbers'
    | 'zip-code'
  value?: string
  width?: string
  placeholder?: string
  style?: StyleProp<ViewStyle>
  onChange?: (value) => void
}

const TextInput: React.FC<Props> = ({
  label,
  value,
  type,
  onChange,
  placeholder,
  width,
  mask,
  style,
}) => {
  const [isFocused, setIsFocused] = useState(false)

  const toggleIsFocused = () => setIsFocused(!isFocused)

  return (
    <Container width={width} style={style}>
      <Label>{label}</Label>

      {mask ? (
        <MaskedInput
          type={mask}
          value={value}
          keyboardType={type}
          onChangeText={onChange}
          placeholder={placeholder}
          onFocus={toggleIsFocused}
          onBlur={toggleIsFocused}
          isFocused={isFocused}
        />
      ) : (
        <Input
          value={value}
          keyboardType={type}
          onChangeText={onChange}
          placeholder={placeholder}
          onFocus={toggleIsFocused}
          onBlur={toggleIsFocused}
          isFocused={isFocused}
        />
      )}
    </Container>
  )
}

export default TextInput
