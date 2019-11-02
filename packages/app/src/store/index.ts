import { createStore, combineReducers } from 'redux'

import { ICartItem } from 'containers/PointOfSale/interfaces'
import cartReducer from './cart'
import productReducer from './product'

interface IStore {
  cart: ICartItem[]
}

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
})

export { IStore }
export default createStore(rootReducer)
