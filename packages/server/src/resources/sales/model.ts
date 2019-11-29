import { model, Schema, Document, Model } from 'mongoose'
import { Sale } from '@stock/shared/interfaces'
import { SaleItem } from '@stock/shared/interfaces/sale'

import { preSaveHooks, postSaveHooks } from './middlewares/model/'
import ProductModel, { ProductSchema } from '../products/model'
import { BaseProductSchema } from '../baseProducts/model'
import { extendSchema } from 'graphql'

interface ISale extends Sale, Document {
  user: Schema.Types.ObjectId
}

interface ISaleItem extends SaleItem {
  _id: Schema.Types.ObjectId
}

const saleItemCompositionSchema = new Schema({
  quantity: Number,
  details: {
    type: Schema.Types.ObjectId,
    ref: 'BaseProduct'
  }
})

const saleItemComboSchema = new Schema({
  quantity: Number,
  details: {
    type: Schema.Types.ObjectId,
    ref: 'Product'
  },
  composition: {
    type: [saleItemCompositionSchema],
    default: []
  }
})

const saleItemSchema = new Schema({
  quantity: Number,
  details: ProductSchema,
  combo: {
    type: [saleItemComboSchema],
    default: []
  },
  composition: {
    type: [saleItemCompositionSchema],
    default: []
  }
})

const schema = new Schema(
  {
    products: {
      type: [saleItemSchema],
      default: []
    },
    customer: {
      type: Schema.Types.ObjectId,
      ref: 'Customer'
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    price: Number,
    discount: {
      type: Number,
      default: 0
    },
    note: String
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    },
    collection: 'sales'
  }
)

schema.virtual('datetime').get(function get() {
  return new Date(this.createdAt)
})

schema.pre('save', preSaveHooks)
schema.post('save', postSaveHooks)

const SaleModel: Model<ISale> = model('Sale', schema)

export { ISale, ISaleItem, schema as SaleSchema }
export default SaleModel
