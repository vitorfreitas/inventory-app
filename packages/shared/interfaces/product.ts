import { Schema } from 'mongoose'
import { BaseProduct } from '.'

interface comboItem {
  id: Schema.Types.ObjectId
  quantity: number
}

interface compositionItem {
  id: Schema.Types.ObjectId
  details: BaseProduct
  quantity: number
}

export default interface Product extends BaseProduct {
  photo: string
  price: number
  combo?: [comboItem]
  composition?: [compositionItem]
  quantity: number
}

export default interface Product {
  name: string
  photo: string
  price: number
  quantity: number
  combo: [comboItem]
  picture: string
  composition: [compositionItem]
}
