import { Schema, Document } from 'mongoose'

interface ICustomer extends Document {
  name: string
  phone: string
  description: string
}

const schema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    phone: {
      type: String
    },
    description: {
      type: String
    }
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    }
  }
)

export { ICustomer, schema as CustomerSchema }
