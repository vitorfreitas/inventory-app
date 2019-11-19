import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

import { Toolbar } from 'styles/styled'
import styled from 'styled-components/native'
import Navbar from 'components/Navbar'
import SearchInput from 'components/SearchInput'
import InventoryProducts from 'containers/InventoryProducts'
import { products } from 'mocks/products.json'
import { t } from 'locations'
import { Heading, ContentTitle, Content } from './styled'
import EditProduct from './EditProduct'
import Product from '@stock/shared/interfaces/product'

const Container = styled.View`
  flex: 1;
`

const FETCH_PRODUCTS = gql`
  query FetchProducts {
    products {
      id
      name
      price
    }
  }
`

interface Props {
  navigation: {
    navigate: (page: string, params?: any) => void
  }
}

const Inventory: React.SFC<Props> = ({ navigation }) => {
  const { data, loading, error } = useQuery<{ products: Product[] }>(
    FETCH_PRODUCTS
  )

  return (
    <Container>
      <Navbar title={t('inventory.title')} withProfile withBackButton={false} />

      <Toolbar>
        <SearchInput placeholder={t('inventory.searchbar')} />
      </Toolbar>

      <Content>
        <Heading>
          <ContentTitle>Produtos</ContentTitle>
        </Heading>

        <InventoryProducts
          loading={loading}
          products={data?.products}
          onEdit={product => navigation.navigate('EditProduct', product)}
        />
      </Content>
    </Container>
  )
}

const InventoryStackNavigator = createStackNavigator(
  {
    Inventory,
    EditProduct
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: {}
  }
)

export default InventoryStackNavigator
