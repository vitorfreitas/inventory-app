import styled from 'styled-components/native'
import Ripple from 'react-native-material-ripple'

export const Content = styled.View`
  flex: 1;
  background: #fafafe;
`

export const ItemContainer = styled(Ripple).attrs({
  rippleOpacity: 0.1
})`
  margin: 4px;
  height: 115px;
  elevation: 2;
  background: #fff;
  border-radius: 4px;
`

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export const SearchInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  margin-left: 16px;
`
