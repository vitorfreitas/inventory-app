import { model, Schema, Document, Model } from 'mongoose'
import { Product } from '@stock/shared/interfaces'

interface IProduct extends Product, Document {
  user: Schema.Types.ObjectId
  active: Boolean
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
    active: {
      type: Boolean,
      default: true,
      hidden: true
    },
    combo: {
      type: [comboItemSchema],
      default: []
    },
    composition: {
      type: [compositionItemSchema],
      default: []
    },
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
