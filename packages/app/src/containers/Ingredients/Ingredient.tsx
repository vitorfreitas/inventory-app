import React from 'react'
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

import { MediumText, NormalText } from 'components/Typography/Text'
import { IBaseProduct } from './interfaces'

const IngredientContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.4,
})`
  padding: 8px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const IngredientName = styled(MediumText)`
  color: #333;
`

const IngredientQuantity = styled(NormalText)`
  color: #797979;
  font-size: 12px;
  margin-left: auto;
  margin-right: 12px;
`

interface Props {
  ingredient: IBaseProduct
  onPress: (ingredient: IBaseProduct) => void
}

const Ingredient: React.SFC<Props> = ({ ingredient, onPress }) => (
  <IngredientContainer onPress={() => onPress(ingredient)}>
    <IngredientName>{ingredient.name}</IngredientName>
    <IngredientQuantity>{ingredient.quantity + ingredient.unit}</IngredientQuantity>
    <Feather name="chevron-right" size={15} color="#9e9e9e" />
  </IngredientContainer>
)

export default Ingredient
