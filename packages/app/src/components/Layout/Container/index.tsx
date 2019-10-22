import { Dimensions } from 'react-native'
import styled from 'styled-components/native'
import { Color } from 'styles/variables'

const { height: deviceHeight } = Dimensions.get('window')

const Container = styled.View`
  flex: 1;
  height: ${deviceHeight};
  background-color: ${Color.background};
`

export default Container
