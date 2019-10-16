import { Schema } from 'mongoose'

interface IAddress {
  street: string
  neighborhood: string
  complement: string
  zipcode: string
}

const schema = new Schema({
  street: {
    type: String,
    required: true
  },
  neighborhood: {
    type: String,
    required: true
  },
  complement: {
    type: String
  },
  zipcode: {
    type: String
  }
})

export { IAddress, schema as AddressSchema }
