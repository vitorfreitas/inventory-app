import { Schema, Document } from 'mongoose'

import { ICustomer, CustomerSchema } from '../../customers/model'

interface ISaleItemComposition {
  id: string
  quantidade?: number
  price?: number
}

interface ISaleItem {
  id: string
  quantity: string
  composition: [ISaleItemComposition]
}

interface ISale extends Document {
  products: [ISaleItem]
  customer?: ICustomer
  date: Date
  note: string
  discount: number
  payment: {
    id: string
    receiveOn: Date
  }
}

const saleItemCompositionSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    ref: 'BaseProduct'
  },
  quantity: {
    type: Number
  },
  price: {
    type: Number
  }
})

const saleItemSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    ref: 'Product'
  },
  quantity: {
    type: Number
  },
  composition: {
    type: [saleItemCompositionSchema]
  }
})

const schema = new Schema(
  {
    products: {
      type: [saleItemSchema]
    },
    customers: {
      type: [CustomerSchema]
    },
    discount: Number,
    note: {
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

export { ISale, ISaleItem, ISaleItemComposition, schema as SaleSchema }
