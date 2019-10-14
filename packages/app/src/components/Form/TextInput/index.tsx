import React, { useState } from 'react'

import styled from 'styled-components/native'
import { MediumText } from 'components/Typography/Text'
import * as V from '@styles/variables'

const Container = styled.View<{ width?: string }>`
  width: ${({ width }) => width || '100%'};
`

const Label = styled(MediumText)`
  font-size: 12px;
  color: #757575;
`

const Input = styled.TextInput<{ isFocused: boolean }>`
  font-family: 'Poppins Medium';
  border-bottom-width: ${({ isFocused }) => (isFocused ? '2px' : '1px')};
  border-color: ${({ isFocused }) => (isFocused ? V.Color.primary : '#bdbdbd')};
`

interface Props {
  label: string
  width?: string
  placeholder?: string
}

const TextInput: React.FC<Props> = ({ label, placeholder, width }) => {
  const [isFocused, setIsFocused] = useState(false)

  const toggleIsFocused = () => setIsFocused(!isFocused)

  return (
    <Container width={width}>
      <Label>{label}</Label>
      <Input
        placeholder={placeholder}
        onFocus={toggleIsFocused}
        onBlur={toggleIsFocused}
        isFocused={isFocused}
      />
    </Container>
  )
}

export default TextInput
