import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { gql } from 'apollo-boost'
import { useQuery, useMutation } from '@apollo/react-hooks'
import LottieView from 'lottie-react-native'

import { t } from 'locations'
import IngredientsContainer from 'containers/Ingredients'
import { IBaseProduct } from 'containers/Ingredients/interfaces'
import { BoldText } from 'components/Typography/Text'
import { AppProductInput } from 'interfaces'

const FETCH_INGREDIENTS = gql`
  query FetchBaseProducts {
    baseProducts {
      id
      name
      unit
    }
  }
`

const CREATE_PRODUCT = gql`
  mutation CreateProduct($product: ProductInput!) {
    createProduct(product: $product) {
      id
    }
  }
`

interface Props {
  navigation: {
    navigate: (page: string) => void
    popToTop: () => void
  }
}

const Ingredients: React.SFC<Props> = ({ navigation }) => {
  const { data: queryData, loading } = useQuery<{
    baseProducts: IBaseProduct[]
  }>(FETCH_INGREDIENTS)
  const [createProductMutation, { data: mutationData, error }] = useMutation(
    CREATE_PRODUCT
  )
  const product: AppProductInput = useSelector((state: any) => state.product)
  const dispatch = useDispatch()

  const updateProductsIngredients = (ingredients: IBaseProduct[]) => {
    dispatch({
      type: 'UPDATE_PRODUCT',
      payload: { ingredients }
    })
  }

  const createProduct = () => {
    const composition = product.ingredients.map(ingredient => ({
      id: ingredient.id,
      quantity: +ingredient.quantity
    }))

    const normalizedProduct = {
      name: product.name,
      price: product.price,
      quantity: +product.quantity,
      composition
    }

    createProductMutation({ variables: { product: normalizedProduct } })
  }

  const navigateToCreateBaseProduct = () => {
    navigation.navigate('CreateBaseProduct')
  }

  if (mutationData) {
    navigation.popToTop()
  }

  if (loading) {
    return (
      <>
        <LottieView
          autoPlay
          loop={true}
          style={{
            width: '60%',
            alignSelf: 'center',
            paddingTop: 150,
            marginBottom: 100
          }}
          source={require('../../../assets/animations/315-loader-ring.json')}
        />

        <BoldText textAlign="center">Buscando seus ingredientes...</BoldText>
      </>
    )
  }

  return (
    <IngredientsContainer
      t={t}
      product={product}
      ingredients={queryData.baseProducts}
      selectedIngredients={product.ingredients}
      onChangeIngredient={updateProductsIngredients}
      onCreate={createProduct}
      onCreateBaseProduct={navigateToCreateBaseProduct}
    />
  )
}

export default Ingredients
