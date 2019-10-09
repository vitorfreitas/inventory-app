import styled from 'styled-components/native'
import Ripple from 'react-native-material-ripple'

export const Content = styled.View`
  flex: 1;
  background: #fafafe;
`

export const ItemContainer = styled(Ripple).attrs({
  rippleOpacity: 0.1
})`
  flex: 1;
  margin: 4px;
  elevation: 3;
  background: #fff;
  border-radius: 4px;
`
