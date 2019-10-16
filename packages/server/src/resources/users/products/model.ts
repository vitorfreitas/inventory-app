import { model, Schema, Document, Model } from 'mongoose'

interface IProduct extends Document {
  name: string
  price: number
  composition: [IProduct]
}

const schema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    composition: {
      type: [this],
      default: []
    }
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    }
  }
)

export { IProduct, schema as ProductSchema }
