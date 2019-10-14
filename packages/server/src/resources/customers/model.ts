import * as bcrypt from 'bcrypt'
import { model, Schema, Document, Model } from 'mongoose'

interface ICustomer extends Document {
  name: string
  email: string
  password?: string
  encryptPassword: (password: string | undefined) => string
  authenticate: (plainPassword: string) => boolean
}

const schema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      hidden: true
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

schema.pre<ICustomer>('save', function encryptPasswordHook(next) {
  if (this.isModified('password')) {
    this.password = this.encryptPassword(this.password)
  }

  return next()
})

schema.methods = {
  authenticate(plainTextPassword: string) {
    return bcrypt.compareSync(plainTextPassword, this.password)
  },
  encryptPassword(password: string) {
    return bcrypt.hashSync(password, 8)
  }
}

const CustomerModel: Model<ICustomer> = model('Customer', schema)

export { ICustomer }
export default CustomerModel
