import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import Container from 'components/Layout/Container'
import Navbar from 'components/Navbar'
import CreateBaseProductContainer from 'containers/CreateBaseProduct'
import { MediumText } from 'components/Typography/Text'

const FETCH_INGREDIENTS = gql`
  query FetchBaseProducts {
    baseProducts {
      id
      name
      unit
    }
  }
`

const CREATE_BASE_PRODUCT = gql`
  mutation CreateBaseProduct($product: BaseProductInput!) {
    createBaseProduct(product: $product) {
      id
      name
      unit
    }
  }
`

interface Props {
  navigation: {
    goBack: () => void
  }
}

const stringToDateFormat = (string: string): Date => {
  const splittedDate = string.split('/')
  const [day, month, year]: number[] = splittedDate.map(string => +string)

  return new Date(year, month, day)
}

const CreateBaseProduct: React.SFC<Props> = ({ navigation }) => {
  const [createBaseProductMutation, { data, error }] = useMutation(
    CREATE_BASE_PRODUCT,
    {
      update(cache, { data: { createBaseProduct }}) {
        const { baseProducts } = cache.readQuery({ query: FETCH_INGREDIENTS })

        cache.writeQuery({
          query: FETCH_INGREDIENTS,
          data: { baseProducts: baseProducts.concat([createBaseProduct]) }
        })
      }
    }
  )
  const [baseProduct, updateBaseProduct] = useState()

  const updateBaseProductField = (field, value) => {
    updateBaseProduct({
      ...baseProduct,
      [field]: value
    })
  }

  const createBaseProduct = (costPrice: number) => {
    const baseProductNormalized = {
      ...baseProduct,
      costPrice,
      unit: 'Gram',
      quantity: +baseProduct.quantity,
      minQuantity: +baseProduct.minQuantity,
      expirationDate: stringToDateFormat(baseProduct.expirationDate)
    }

    createBaseProductMutation({ variables: { product: baseProductNormalized } })
    }

  if (data) {
    navigation.goBack()
  }

  return (
    <Container>
      <Navbar title="Create Base Product" />

      <CreateBaseProductContainer
        currentBaseProduct={baseProduct}
        onChangeInputField={updateBaseProductField}
        onSaveBaseProduct={createBaseProduct}
      />
    </Container>
  )
}

export default CreateBaseProduct
