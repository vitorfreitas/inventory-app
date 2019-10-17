import styled from 'styled-components/native'
import Ripple from 'react-native-material-ripple'
import * as V from 'styles/variables'

export const Content = styled.ScrollView`
  flex: 1;
  background: ${V.Color.background};
`

export const ItemContainer = styled(Ripple).attrs({
  rippleOpacity: 0.1
})`
  margin: 4px;
  height: 115px;
  border-radius: 4px;
  border: 1px solid #eee;
`
