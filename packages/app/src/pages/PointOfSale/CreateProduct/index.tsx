import React from 'react'

import CreateProductContainer from 'containers/CreateProduct'
import { t } from 'locations'
import { useDispatch, useSelector } from 'react-redux'
import { gql } from 'apollo-boost'
import { useMutation } from 'react-apollo'

const CREATE_PRODUCT = gql`
  mutation CreateProduct($product: ProductInput!) {
    createProduct(product: $product) {
      id
      name
      price
    }
  }
`

const FETCH_PRODUCTS = gql`
  query {
    products {
      id
      name
      price
    }
  }
`

interface Props {
  navigation: {
    navigate: (page: string) => void
    popToTop: () => void
  }
}

const CreateProduct: React.SFC<Props> = ({ navigation }) => {
  const product = useSelector((state: any) => state.product)
  const dispatch = useDispatch()
  const [createProductMutation, { data: mutationData, error }] = useMutation(
    CREATE_PRODUCT,
    {
      update(cache, { data: { createProduct } }) {
        const { products } = cache.readQuery({ query: FETCH_PRODUCTS })

        cache.writeQuery({
          query: FETCH_PRODUCTS,
          data: { products: products.concat([createProduct]) }
        })
      }
    }
  )

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
    const normalizedProduct = {
      name: product.name,
      price: product.rawPrice / 10,
      quantity: +product.quantity,
      minQuantity: +product.minimumAmount
    }

    createProductMutation({ variables: { product: normalizedProduct } })
  }

  if (mutationData) {
    navigation.popToTop()
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
