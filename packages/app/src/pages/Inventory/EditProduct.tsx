import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

import EditProductContainer from 'containers/EditProduct'
import Product from '@stock/shared/interfaces/product'

const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($product: ProductInput!) {
    updateProduct(product: $product) {
      id
      name
      price
    }
  }
`

interface Props {
  navigation: {
    getParam: (param: string) => Product
    goBack: () => void
  }
}

const EditProduct: React.SFC<Props> = ({ navigation }) => {
  const [updateProductMutation, { data, loading, error }] = useMutation(
    UPDATE_PRODUCT
  )

  const [product, setProduct] = useState<Partial<Product>>(
    navigation.getParam('product')
  )

  const handleInputChange = field => value => {
    setProduct({ ...product, [field]: value })
  }

  const updateProduct = (rawValue: number) => {
    const updatedProduct = {
      id: product.id,
      name: product.name,
      price: rawValue
    }

    updateProductMutation({ variables: { product: updatedProduct } })
  }

  if (data && !error) {
    navigation.goBack()
  }

  return (
    <EditProductContainer
      loading={loading}
      product={product}
      onChangeValue={handleInputChange}
      onSubmit={updateProduct}
    />
  )
}

export default EditProduct
