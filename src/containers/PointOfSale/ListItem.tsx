import React, { useState } from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
  height: 100px;
  padding: 15px;
  border-radius: 4px;
  border: 1px solid #eee;

  flex-direction: row;
  margin-bottom: 5px;
`

const Picture = styled.Image`
  width: 30%;
  height: 100%;
  border-radius: 4px;
`

const DataContainer = styled.View`
  flex: 1;
  margin-left: 15px;
`

const Title = styled.Text`
  color: #333;
  font-size: 15px;
  margin-bottom: -5px;
  font-family: 'Poppins Medium';
`

const Price = styled.Text`
  color: #888;
  font-size: 14px;
  font-family: 'Poppins';
`

const ListItem: React.SFC = () => {
  return (
    <Container>
      <Picture
        source={{
          uri:
            'https://panelinha-sitenovo.s3-sa-east-1.amazonaws.com/receita/1562096945621-receita.jpg'
        }}
      />

      <DataContainer>
        <Title>Hamburguer</Title>
        <Price>R$ 25,00</Price>
      </DataContainer>
    </Container>
  )
}

export default ListItem
