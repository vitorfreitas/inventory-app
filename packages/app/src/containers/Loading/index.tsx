import React from 'react'
import LottieView from 'lottie-react-native'

import { BoldText } from 'components/Typography/Text'

interface Props {
  message: string
}

const LoadingContainer: React.SFC<Props> = ({ message }) => (
  <>
    <LottieView
      autoPlay
      loop={true}
      style={{
        width: '60%',
        alignSelf: 'center',
        paddingTop: 150,
        marginBottom: 100
      }}
      source={require('../../../assets/animations/315-loader-ring.json')}
    />

    <BoldText textAlign="center">{message}</BoldText>
  </>
)

export default LoadingContainer
