import React from 'react'

import CreateProductContainer from 'containers/CreateProduct'
import { t } from 'locations'
import { useDispatch, useSelector } from 'react-redux'

interface Props {
  navigation: {
    navigate: (page: string) => void
  }
}

const CreateProduct: React.SFC<Props> = ({ navigation }) => {
  const product = useSelector((state: any) => state.product)
  const dispatch = useDispatch()

  const handleProductChange = product => {
    dispatch({
      type: 'UPDATE_PRODUCT',
      payload: product
    })
  }

  const handleSelectIngredients = () => {
    navigation.navigate('Ingredients')
  }

  const createProduct = () => {
    console.log(product)
  }

  return (
    <CreateProductContainer
      t={t}
      product={product}
      onChangeProduct={handleProductChange}
      onSelectIngredients={handleSelectIngredients}
      onCreate={createProduct}
    />
  )
}

export default CreateProduct
