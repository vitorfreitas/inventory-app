import { model, Schema, Document, Model } from 'mongoose'
import { Product } from '@inventory/shared/interfaces'
import { extendSchema } from '../../utils'

import { BaseProductSchema } from '../baseProducts/model'

interface IProduct extends Product, Document {
  id: Schema.Types.ObjectId
  user: Schema.Types.ObjectId
}

const comboItemSchema = new Schema({
  details: {
    type: Schema.Types.ObjectId,
    ref: 'Product'
  },
  quantity: {
    type: Number,
    default: 1
  }
})

const compositionItemSchema = new Schema({
  details: {
    type: Schema.Types.ObjectId,
    ref: 'BaseProduct'
  },
  quantity: {
    type: Number,
    default: 1
  }
})

const schema = extendSchema(
  BaseProductSchema,
  {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    combo: {
      type: [comboItemSchema],
      default: []
    },
    composition: {
      type: [compositionItemSchema],
      default: []
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
