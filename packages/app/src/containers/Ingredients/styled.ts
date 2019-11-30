import styled from 'styled-components/native'
import Ripple from 'react-native-material-ripple'
import { MediumText } from 'components/Typography/Text'

export const AddProductItem = styled(Ripple).attrs({
  rippleOpacity: 0.1
})`
  padding: 8px 12px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px #bdbdbd dashed;
`

export const AddProductIcon = styled.View`
  align-self: center;
  align-items: center;
  justify-content: center;
`

export const AddProductText = styled(MediumText)`
  color: #9e9e9e;
  font-size: 14px;
  margin-top: 4px;
  margin-left: 17px;
`

export const AddProductContainer = styled.View`
  margin-top: 16px;
`
