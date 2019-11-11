import { model, Schema, Document, Model } from 'mongoose'
import { Sale } from '@stock/shared/interfaces'

interface ISale extends Sale, Document {
  user: Schema.Types.ObjectId
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
  details: {
    type: Schema.Types.ObjectId,
    ref: 'Product'
  },
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
    discount: Number,
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

const SaleModel: Model<ISale> = model('Sale', schema)

export { ISale, schema as SaleSchema }
export default SaleModel
