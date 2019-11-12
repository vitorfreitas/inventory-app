import styled from 'styled-components/native'

interface TextProps {
  textAlign?: 'center' | 'left' | 'right'
}

export const NormalText = styled.Text(
  (props: TextProps) => `
  font-family: Poppins;
  text-align: ${props.textAlign || 'left'}
`
)

export const MediumText = styled.Text(
  (props: TextProps) => `
  font-family: 'Poppins Medium';
  text-align: ${props.textAlign || 'left'}
`
)

export const BoldText = styled.Text(
  (props: TextProps) => `
  font-family: 'Poppins Bold';
  text-align: ${props.textAlign || 'left'}
`
)
