import React from 'react'
import styled from 'styled-components/native'
import Ripple from 'react-native-material-ripple'
import { Feather } from '@expo/vector-icons'

import ListItem from './ListItem'
import Product from 'shared/interfaces/product'

const ProductsContainer = styled.View`
  margin-top: 24px;
  border-top-color: #eee;
  border-top-width: 1px;
`

const AddProductItem = styled(Ripple).attrs({
  rippleOpacity: 0.1
})`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px #bdbdbd dashed;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const AddProductIcon = styled.View`
  align-self: center;
  align-items: center;
  justify-content: center;
`

const AddProductText = styled.Text`
  color: #9e9e9e;
  font-size: 14px;
  margin-top: 4px;
  margin-left: 17px;
  font-family: 'Poppins Medium';
`

const AddProductContainer = styled.View`
  padding-left: 32px;
  padding-right: 32px;
  margin-top: 16px;
`

interface Props {
  t: (path) => string
  products: Product[]
  onCreateProduct: () => void
  onProductLongPress: (product) => void
}

const ListContainer: React.SFC<Props> = ({
  t,
  products,
  onCreateProduct,
  onProductLongPress
}) => {
  const _renderItem = (product, index) => {
    return (
      <ListItem
        t={t}
        data={product}
        onLongPress={onProductLongPress}
        key={index}
      />
    )
  }

  return (
    <>
      <AddProductContainer>
        <AddProductItem onPress={onCreateProduct}>
          <AddProductIcon>
            <Feather name="plus" size={18} color={'#9e9e9e'} />
          </AddProductIcon>
          <AddProductText>{t('pos.add')}</AddProductText>
        </AddProductItem>
      </AddProductContainer>

      <ProductsContainer>{products.map(_renderItem)}</ProductsContainer>
    </>
  )
}

export default ListContainer
