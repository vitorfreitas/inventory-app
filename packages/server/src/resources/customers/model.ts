import { model, Schema, Document, Model } from 'mongoose'
import { Customer } from '@inventory/shared/interfaces'

interface ICustomer extends Customer, Document {
  user: Schema.Types.ObjectId
}

const schema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    photo: {
      type: String
    },
    phone: {
      type: String
    },
    description: {
      type: String
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
    collection: 'customers'
  }
)

const CustomerModel: Model<ICustomer> = model('Customer', schema)

export { ICustomer, schema as CustomerSchema }
export default CustomerModel
