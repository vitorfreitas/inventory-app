import { model, Schema, Document, Model } from 'mongoose'
import { Product } from '@stock/shared/interfaces'

interface IProduct extends Product, Document {
  user: Schema.Types.ObjectId
}

const schema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    quantity: {
      type: Number
    },
    price: {
      type: Number,
      required: true
    },
    combo: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product'
      }
    ],
    composition: [
      {
        type: Schema.Types.ObjectId,
        ref: 'BaseProduct'
      }
    ],
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    },
    collection: 'products'
  }
)

const ProductModel: Model<IProduct> = model('Product', schema)

export { IProduct, schema as ProductSchema }
export default ProductModel
