import { Schema } from 'mongoose'

export default interface BaseProduct {
  id: Schema.Types.ObjectId
  name: string
  quantity: number
  costPricePerUnit?: number
  quantityPerSale?: number
  minQuantity?: number
  additionalPrice?: number
  expirationDate?: Date
  active?: boolean
}
