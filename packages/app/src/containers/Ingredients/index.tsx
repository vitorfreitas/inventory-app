import React, { useState } from 'react'
import styled from 'styled-components/native'

import ProductOverview from 'components/ProductOverview'
import { BoldText, NormalText, MediumText } from 'components/Typography/Text'
import Container from 'components/Layout/Container'
import Navbar from 'components/Navbar'
import { Feather } from '@expo/vector-icons'
import AddIngredient from './AddIngredient'
import { IBaseProduct } from './interfaces'
import Ingredient from './Ingredient'
import Link from 'components/Link'
import Button from 'components/Button'
import {
  AddProductContainer,
  AddProductItem,
  AddProductIcon,
  AddProductText
} from './styled'
import { AppProductInput } from 'interfaces'

const Form = styled.ScrollView`
  flex: 1;
  border-top-width: 0;
  border: 1px solid #eee;
  background-color: #ffffff;
  padding: 12px 24px 16px 24px;
`

const FormTitle = styled(BoldText)`
  margin: 16px 0;
  font-size: 18px;
`

const Footer = styled.View`
  width: 100%;
  padding: 12px 20px;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-top-width: 1px;
  border-top-color: #eee;
  justify-content: space-between;
`

interface Props {
  t: (path: string) => string
  product: AppProductInput
  ingredients: IBaseProduct[]
  selectedIngredients: IBaseProduct[]
  onChangeIngredient: (ingredients: IBaseProduct[]) => void
  onCreate: () => void
  onCreateBaseProduct: () => void
}

const IngredientsContainer: React.SFC<Props> = ({
  t,
  product,
  ingredients,
  selectedIngredients,
  onChangeIngredient,
  onCreate,
  onCreateBaseProduct
}) => {
  const [selectedIngredient, setSelectedIngredient] = useState<IBaseProduct>()
  const [addProductIsOpen, setAddProductDialogIsOpen] = useState<boolean>(false)

  const toggleAddProductDialog = () =>
    setAddProductDialogIsOpen(!addProductIsOpen)

  const updateIngredientOnProduct = (ingredient: IBaseProduct) => {
    const updatedIngredientsList: IBaseProduct[] = ingredients.map(item => {
      if (item.id !== selectedIngredient.id) return item

      return ingredient
    })

    onChangeIngredient(updatedIngredientsList)
    toggleAddProductDialog()
    setSelectedIngredient(null)
  }

  const addIngredientToProduct = (ingredient: IBaseProduct) => {
    onChangeIngredient([...selectedIngredients, ingredient])
    toggleAddProductDialog()
  }

  const openEditIngredientDialog = (ingredient: IBaseProduct) => {
    setSelectedIngredient(ingredient)
    toggleAddProductDialog()
  }

  const closeAddProductAndNavigateToCreateBaseProduct = () => {
    toggleAddProductDialog()
    onCreateBaseProduct()
  }

  return (
    <>
      <Container>
        <Navbar title="Ingredientes" />
        <ProductOverview product={product} />

        <Form>
          <FormTitle>{t('pos.create.ingredients')}</FormTitle>

          {selectedIngredients.map(i => (
            <Ingredient
              key={i.id}
              onPress={openEditIngredientDialog}
              ingredient={i}
            />
          ))}

          <AddProductContainer>
            <AddProductItem onPress={toggleAddProductDialog}>
              <AddProductIcon>
                <Feather name="plus" size={18} color="#9e9e9e" />
              </AddProductIcon>
              <AddProductText>{t('pos.add')}</AddProductText>
            </AddProductItem>
          </AddProductContainer>
        </Form>

        <Footer>
          <Link onPress={() => {}}>Cancel</Link>

          <Button onPress={onCreate} text="Create product" />
        </Footer>
      </Container>

      <AddIngredient
        t={t}
        edit={!!selectedIngredient}
        defaultIngredient={selectedIngredient}
        ingredients={ingredients}
        open={addProductIsOpen}
        onCreateBaseProduct={closeAddProductAndNavigateToCreateBaseProduct}
        onClose={toggleAddProductDialog}
        onFinish={addIngredientToProduct}
        onEdit={updateIngredientOnProduct}
      />
    </>
  )
}

export default IngredientsContainer
