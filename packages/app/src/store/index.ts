import { createStore, combineReducers } from 'redux'

import { ICartItem } from 'containers/PointOfSale/interfaces'
import cartReducer from './cart'

interface IStore {
  cart: ICartItem[]
}

const rootReducer = combineReducers({
  cart: cartReducer,
})

export { IStore }
export default createStore(rootReducer)
