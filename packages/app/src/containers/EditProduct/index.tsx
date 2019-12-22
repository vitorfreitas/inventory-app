import React, { useRef } from 'react'
import styled from 'styled-components/native'
import { ScrollView } from 'react-native'
import { is } from 'ramda'

import Navbar from 'components/Navbar'
import ProductOverview from 'components/ProductOverview'
import { BoldText } from 'components/Typography/Text'
import TextInput from 'components/Form/TextInput'
import Link from 'components/Link'
import Button from 'components/Form/Button'
import LoadingContainer from 'containers/Loading'

const Container = styled.View`
  flex: 1;
`

const Form = styled.KeyboardAvoidingView`
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
  product: any
  onChangeValue: (field: string) => (value: string) => void
  onSubmit: (rawPrice: number) => void
  loading: boolean
}

const EditProductContainer: React.SFC<Props> = ({
  product,
  onChangeValue,
  onSubmit,
  loading
}) => {
  const maskedInputRef = useRef<{ getRawValue: () => number }>(null)

  const formatMaskedInputAndSubmit = () => {
    if (is(Number, product.price)) {
      return onSubmit(product.price)
    }

    const value = maskedInputRef.current.getRawValue()
    return onSubmit(value)
  }

  if (loading) {
    return <LoadingContainer message="Atualizando o produto" />
  }

  return (
    <Container>
      <Navbar title="Editar Produto" withBackButton />

      <ScrollView style={{ paddingBottom: 16 }}>
        <ProductOverview product={product} />

        <Form>
          <FormTitle>Editar produto</FormTitle>

          <TextInput
            onChange={onChangeValue('name')}
            value={product.name}
            label="Nome"
            placeholder="ex.: Pizza de mozzarela"
          />

          <TextInput
            maskRef={maskedInputRef}
            mask="money"
            type="number-pad"
            onChange={onChangeValue('price')}
            value={product.price}
            label="Preço"
            placeholder="R$ 0,00"
          />
        </Form>
      </ScrollView>

      <Footer>
        <Link color="#e74c3c" onPress={() => {}}>
          Deletar
        </Link>

        <Button onPress={formatMaskedInputAndSubmit} text="Salvar" />
      </Footer>
    </Container>
  )
}

export default EditProductContainer
