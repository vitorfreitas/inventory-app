import { model, Schema, Document, Model } from 'mongoose'

interface IProduct extends Document {
  name: string
  price: number
}

const schema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    }
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    },
    collection: 'product'
  }
)

const ProductModel: Model<IProduct> = model('Product', schema)

export { IProduct }
export default ProductModel
