import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import IngredientsContainer from 'containers/Ingredients'
import { t } from 'locations'
import { IBaseProduct } from 'containers/Ingredients/interfaces'

const Ingredients = () => {
  const product = useSelector((state: any) => state.product)
  const dispatch = useDispatch()

  const handleIngredientChange = (ingredients: IBaseProduct[]) => {
    dispatch({
      type: 'UPDATE_PRODUCT',
      payload: { ingredients },
    })
  }

  return (
    <IngredientsContainer
      t={t}
      ingredients={product.ingredients}
      onChangeIngredient={handleIngredientChange}
    />
  )
}

export default Ingredients
