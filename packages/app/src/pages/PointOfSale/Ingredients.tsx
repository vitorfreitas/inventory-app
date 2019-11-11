import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import IngredientsContainer from 'containers/Ingredients'
import { t } from 'locations'
import { IBaseProduct } from 'containers/Ingredients/interfaces'

interface Props {
  navigation: {
    navigate: (page: string) => void
  }
}

const Ingredients: React.SFC<Props> = ({ navigation }) => {
  const product = useSelector((state: any) => state.product)
  const dispatch = useDispatch()

  const handleIngredientChange = (ingredients: IBaseProduct[]) => {
    dispatch({
      type: 'UPDATE_PRODUCT',
      payload: { ingredients }
    })
  }

  const createProduct = () => {
    console.log(product)
  }

  const navigateToCreateBaseProduct = () => {
    navigation.navigate('CreateBaseProduct')
  }

  return (
    <IngredientsContainer
      t={t}
      ingredients={product.ingredients}
      onChangeIngredient={handleIngredientChange}
      onCreate={createProduct}
      onCreateBaseProduct={navigateToCreateBaseProduct}
    />
  )
}

export default Ingredients
