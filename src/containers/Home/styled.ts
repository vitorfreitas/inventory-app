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

export const Row = styled.View`
  width: 100%;
  padding: 15px 25px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Toolbar = styled(Row)`
  background: #fff;
  border-color: #eee;
  border-bottom-width: 1px;
`

export const SearchInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  text-align: right;
`

export const Heading = styled.Text`
  flex: 1;
  font-size: 18px;
  font-family: Poppins;
`
