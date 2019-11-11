import { model, Schema, Document, Model } from 'mongoose'

interface IPaymentMethod extends Document {
  name: string
  icon: string
  active: boolean
}

const schema = new Schema(
  {
    name: {
      type: String
    },
    icon: {
      type: String
    },
    active: {
      type: Boolean
    }
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    },
    collection: 'paymentMethods'
  }
)

const PaymentMethodModel: Model<IPaymentMethod> = model('PaymentMethod', schema)

export { IPaymentMethod, schema as PaymentMethodSchema }
export default PaymentMethodModel
