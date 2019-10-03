import React from 'react'
import styled from 'styled-components/native'

export const StyledText = styled.Text`
  margin: 40px 20px;
`

const Title: React.SFC = ({ children }) => <StyledText>{children}</StyledText>

export default Title
