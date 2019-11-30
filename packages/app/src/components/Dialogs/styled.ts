import styled from 'styled-components/native'
import { BoldText, NormalText } from 'components/Typography/Text'

export const Modal = styled.Modal.attrs({
  transparent: true,
  animationType: 'fade'
})``

export const Background = styled.View`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35);

  align-items: center;
  justify-content: center;

  top: 0;
  left: 0;
  position: absolute;
`

export const Container = styled.View`
  width: 80%;
  height: 400px;
  padding: 12px;
  background: #fff;
  border-radius: 12px;
  align-items: center;
`

export const Title = styled(BoldText)`
  color: #333;
  font-size: 28px;
  text-align: center;
`

export const Message = styled(NormalText)`
  color: #757575;
  text-align: center;
`

export const Footer = styled.View`
  margin-top: auto;
  align-items: center;
  justify-content: center;
`
