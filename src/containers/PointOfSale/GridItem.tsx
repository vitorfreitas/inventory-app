import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'

import { ItemContainer as Container } from './styled'

const Image = styled.Image`
  width: 100%;
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
  item?: {
    isEmpty: boolean
  }
}

const GridItem: React.SFC<Props> = ({ item }) => {
  if (item.isEmpty) {
    return <View style={{ flex: 1, margin: 4 }} />
  }

  return (
    <Container empty={item.isEmpty}>
      <Image
        source={{
          uri:
            'https://panelinha-sitenovo.s3-sa-east-1.amazonaws.com/receita/1562096945621-receita.jpg'
        }}
      />

      <DataContainer>
        <Title>Hamburguer</Title>
        <Price>R$ 24,00</Price>
      </DataContainer>
    </Container>
  )
}

export default GridItem
