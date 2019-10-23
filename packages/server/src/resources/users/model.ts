import { hashSync, compareSync } from 'bcrypt'
import { model, Schema, Document, Model } from 'mongoose'

import { User } from '@stock/shared/interfaces'

interface IUser extends User, Document {
  password: string
  encryptPassword: (password: string | undefined) => string
  authenticate: (plainPassword: string) => boolean
}

const schema = new Schema(
  {
    name: {
      type: String,
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
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: false,
      hidden: true
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
