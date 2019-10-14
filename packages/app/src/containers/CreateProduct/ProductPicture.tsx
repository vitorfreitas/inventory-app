import React from 'react'
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import Ripple from 'react-native-material-ripple'

const PictureContainer = styled(Ripple)`
  width: 100px;
  height: 100px;
  position: relative;
  border-radius: 4px;
`

const Picture = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`

const PictureOverlay = styled.View`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  position: absolute;
  background: rgba(0, 0, 0, 0.58);

  align-items: center;
  justify-content: center;
`

const ProductPicture = () => {
  return (
    <PictureContainer>
      <Picture
        source={{
          uri:
            'https://visitredding.objects.liquidweb.services/photos/466-mexican-food-400x400-Square-400x400.jpg'
        }}
      />

      <PictureOverlay>
        <Feather name="camera" size={28} color="#fff" />
      </PictureOverlay>
    </PictureContainer>
  )
}

export default ProductPicture
