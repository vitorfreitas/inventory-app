import { IBaseProduct } from 'containers/Ingredients/interfaces'

export interface AppProductInput {
  name: string
  price: string
  quantity: string
  measurementUnit: string
  minimumAmount: string
  ingredients: IBaseProduct[]
}
