import { hashSync, compareSync } from 'bcrypt'
import { model, Schema, Document, Model } from 'mongoose'

import { IAddress, AddressSchema } from './address/model'
import { IProduct, ProductSchema } from './products/model'
import { ICustomer, CustomerSchema } from './customers/model'

import { nameIsValid, emailIsValid, phoneIsValid } from '../../lib/validations'

import { INVALID_EMAIL, INVALID_NAME } from '../../lib/errors'

interface IUser extends Document {
  name: string
  businessName: string
  phone: string
  cpnj: string
  email: string
  password?: string
  address: IAddress
  products: [IProduct]
  customers: [ICustomer]
  encryptPassword: (password: string | undefined) => string
  authenticate: (plainPassword: string) => boolean
}

const schema = new Schema(
  {
    name: {
      type: String,
      validate: {
        validator: nameIsValid,
        message: () => INVALID_NAME
      },
      required: true
    },
    businessName: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      unique: true,
      required: true
    },
    cnpj: {
      type: String,
      unique: true
    },
    email: {
      type: String,
      validate: {
        validator: emailIsValid,
        message: () => INVALID_EMAIL
      },
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true,
      hidden: true
    },
    address: {
      type: AddressSchema
    },
    products: {
      type: [ProductSchema]
    },
    customers: {
      type: [CustomerSchema]
    }
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    },
    collection: 'users'
  }
)

schema.pre<IUser>('save', function encryptPasswordHook(next) {
  if (this.isModified('password')) {
    this.password = this.encryptPassword(this.password)
  }

  return next()
})

schema.methods = {
  authenticate(plainTextPassword: string): boolean {
    return compareSync(plainTextPassword, this.password)
  },
  encryptPassword(password: string): string {
    const rounds: number = 8

    return hashSync(password, rounds)
  }
}

const UserModel: Model<IUser> = model('User', schema)

export { IUser, schema as UserSchema }
export default UserModel
