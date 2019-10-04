import styled from 'styled-components/native'
import Ripple from 'react-native-material-ripple'

export const TabBarContainer = styled.View`
  height: 55px;
  border-top-width: 1px;
  border-top-color: #eee;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

export const TabBarIconContainer = styled(Ripple).attrs({
  rippleOpacity: 0.1,
  rippleDuration: 600
})`
  flex: 1;
  align-items: center;
  padding: 13px 0;
`
