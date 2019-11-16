import { Schema } from 'mongoose'

interface comboItem {
  id: Schema.Types.ObjectId
  quantity: number
}

interface compositionItem {
  id: Schema.Types.ObjectId
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
