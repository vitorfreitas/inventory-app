import React, { useState } from 'react'

import Container from 'components/Layout/Container'
import Navbar from 'components/Navbar'
import CreateBaseProductContainer from 'containers/CreateBaseProduct'

const CreateBaseProduct: React.SFC = () => {
  const [baseProduct, updateBaseProduct] = useState()

  const updateBaseProductField = (field, value) => {
    updateBaseProduct({
      ...baseProduct,
      [field]: value
    })
  }

  const createBaseProduct = () => {
    console.log(baseProduct)
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
