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
      payload: { ingredients }
    })
  }

  const createProduct = () => {
    console.log(product)
  }

  return (
    <IngredientsContainer
      t={t}
      ingredients={product.ingredients}
      onChangeIngredient={handleIngredientChange}
      onCreate={createProduct}
    />
  )
}

export default Ingredients
