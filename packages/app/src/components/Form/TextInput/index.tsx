import React, { useState } from 'react'

import styled from 'styled-components/native'
import { MediumText } from 'components/Typography/Text'
import * as V from '@styles/variables'

const Container = styled.View<{ width?: string }>`
  width: ${({ width }) => width || '100%'};
  margin-bottom: 12px;
`

const Label = styled(MediumText)`
  color: #757575;
  font-size: 12px;
`

const Input = styled.TextInput<{ isFocused: boolean }>`
  color: #333;
  font-size: 16px;
  font-family: 'Poppins Medium';
  border-bottom-width: ${({ isFocused }) => (isFocused ? '2px' : '1px')};
  border-color: ${({ isFocused }) => (isFocused ? V.Color.primary : '#bdbdbd')};
`

interface Props {
  label: string
  value?: string
  onChange?: (value) => void
  width?: string
  placeholder?: string
}

const TextInput: React.FC<Props> = ({
  label,
  value,
  onChange,
  placeholder,
  width
}) => {
  const [isFocused, setIsFocused] = useState(false)

  const toggleIsFocused = () => setIsFocused(!isFocused)

  return (
    <Container width={width}>
      <Label>{label}</Label>
      <Input
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        onFocus={toggleIsFocused}
        onBlur={toggleIsFocused}
        isFocused={isFocused}
      />
    </Container>
  )
}

export default TextInput
