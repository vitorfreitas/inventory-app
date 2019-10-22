import Product from 'shared/interfaces/product'
import { ICartItem } from 'containers/PointOfSale/interfaces'

const cartReducer = (state: ICartItem[] = [], action) => {
  const addItemToCart = (item: Product) => [...state, item]

  const removeItemFromCart = (item: Product) => {
    const filteredCart = state.filter((p) => p.product.id !== item.id)

    return filteredCart
  }

  const cleanCart = () => []

  const types = {
    ADD_ITEM: addItemToCart,
    REMOVE_FROM_CART: removeItemFromCart,
    CLEAN_CART: cleanCart,
  }

  return types[action.type] ? types[action.type](action.payload) : state
}

export default cartReducer
