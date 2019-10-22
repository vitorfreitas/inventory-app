import React from 'react'
import styled from 'styled-components/native'
import Product from 'shared/interfaces/product'
import { ItemContainer as Container } from './styled'

const Image = styled.Image`
  height: 70px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`

const DataContainer = styled.View`
  padding: 3px 9px;
  background: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`

const Title = styled.Text`
  color: #333;
  font-size: 13px;
  margin-bottom: -5px;
  font-family: 'Poppins Medium';
`

const Price = styled.Text`
  color: #888;
  font-size: 12px;
  font-family: 'Poppins';
`

interface Props {
  data: Product
  onPress: (product: Product) => void
  onLongPress: (product: Product) => void
}

const GridItem: React.SFC<Props> = ({ data, onPress, onLongPress }) => {
  const handleLongPress = () => onLongPress(data)
  const handlePress = () => onPress(data)

  const formatName = (name: string): string => {
    if (name.length <= 10) return name

    return `${name.substring(0, 9)}...`
  }

  return (
    <Container onLongPress={handleLongPress} onPress={handlePress}>
      <Image source={{ uri: data.picture }} />

      <DataContainer>
        <Title>{formatName(data.name)}</Title>
        <Price>
          R$
          {data.price}
        </Price>
      </DataContainer>
    </Container>
  )
}

export default GridItem
