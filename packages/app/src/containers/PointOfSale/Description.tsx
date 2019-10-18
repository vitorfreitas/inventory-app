import React, { useState } from 'react'
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import Ripple from 'react-native-material-ripple'

import { Row } from 'styles/styled'
import * as V from 'styles/variables'
import Button from 'components/Button'
import NumberPicker from 'components/NumberPicker'
import DefaultModal from 'components/DefaultModal'
import Product from 'shared/interfaces/product'

const Picture = styled.Image`
  width: 100%;
  height: 150px;

  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`

const EditButton = styled(Ripple).attrs({
  rippleOpacity: 0.1,
})`
  width: 50px;
  height: 50px;
  align-items: center;
  border-radius: 25px;
  justify-content: center;
  background: ${V.Color.primary};

  top: 120px;
  right: 20px;
  position: absolute;
`

const Heading = styled(Row)`
  padding: 30px 25px 25px;
  justify-content: space-between;
`

const Title = styled.Text`
  color: #333;
  font-size: 18px;
  font-family: 'Poppins Bold';
`

const Price = styled.Text`
  color: #888;
  font-size: 16px;
  font-family: 'Poppins';
`

const CompositionContainer = styled.ScrollView`
  padding: 0 25px;
  min-height: 200px;
`

const CompositionRow = styled(Row)`
  margin-bottom: 5px;
  justify-content: space-between;
`

const CompositionName = styled.Text`
  font-family: 'Poppins Medium';
`

const CompositionValue = styled.Text`
  font-family: Poppins;
  color: #757575;
`

const Footer = styled(Row)`
  padding: 0 25px;
  bottom: 20px;
  position: absolute;
  justify-content: space-between;
`

const SeeMore = styled.Text`
  font-size: 14px;
  margin-top: 8px;
  color: ${V.Color.primary};
  font-family: 'Poppins Medium';
`

interface Props {
  open: boolean
  product: Product
  t: (path: string) => string
  onClose: () => void
  onAddToCart: (product: Product, quantity?: number) => void
}

const DescriptionModal: React.FC<Props> = ({ t, product, open, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1)

  const addToCartAndCloseModal = () => {
    onAddToCart(product, quantity)
    onClose()
  }

  return (
    <DefaultModal open={open} onClose={onClose}>
      <Picture source={{ uri: product.picture }} />
  
      <EditButton>
        <Feather name="edit-3" color="#fff" size={20} />
      </EditButton>
  
      <Heading>
        <Title>{product.name}</Title>
        <Price>R$ {product.price}</Price>
      </Heading>
  
      <CompositionContainer>
        <CompositionRow>
          <CompositionName>Pão de Hamburguer</CompositionName>
          <CompositionValue>1 un</CompositionValue>
        </CompositionRow>
  
        <CompositionRow>
          <CompositionName>Pão de Hamburguer</CompositionName>
          <CompositionValue>1 un</CompositionValue>
        </CompositionRow>
  
        <CompositionRow>
          <CompositionName>Pão de Hamburguer</CompositionName>
          <CompositionValue>1 un</CompositionValue>
        </CompositionRow>
  
        <Row>
          <SeeMore>
            {t('pos.description.see-more')}
            <Feather name="chevron-right" />
          </SeeMore>
        </Row>
      </CompositionContainer>
  
      <Footer>
        <NumberPicker quantity={quantity} onChange={setQuantity} />
        <Button onPress={addToCartAndCloseModal} text={t('pos.description.add')} />
      </Footer>
    </DefaultModal>
  )
}

export default DescriptionModal
