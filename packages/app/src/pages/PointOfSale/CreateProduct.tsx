import React from 'react'

import CreateProductContainer from 'containers/CreateProduct'
import { t } from 'locations'

interface Props {
  navigation: {
    navigate: (page: string) => void
  }
}

const CreateProduct: React.SFC<Props> = ({ navigation }) => {
  const handleSelectIngredients = () => {
    navigation.navigate('Ingredients')
  }

  return <CreateProductContainer t={t} onSelectIngredients={handleSelectIngredients} />
}

export default CreateProduct
