import { model, Schema, Document, Model } from 'mongoose'
import { BaseProduct } from '@stock/shared/interfaces'
import { Unit } from '@stock/shared/enums'

interface IBaseProduct extends BaseProduct, Document {
  user: Schema.Types.ObjectId
  active: Boolean
}

const schema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    unit: {
      type: Unit,
      required: true
    },
    costPrice: {
      type: Number
    },
    additionalPrice: {
      type: Number
    },
    quantity: {
      type: Number
    },
    minQuantity: {
      type: Number
    },
    expirationDate: {
      type: Date
    },
    active: {
      type: Boolean,
      default: true,
      hidden: true
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
    collection: 'baseProducts'
  }
)

const BaseProductModel: Model<IBaseProduct> = model('BaseProduct', schema)

export { IBaseProduct, schema as BaseProductSchema }
export default BaseProductModel
