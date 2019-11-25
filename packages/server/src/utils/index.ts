import { Schema } from 'mongoose'

function extendSchema(schema: Schema, definition: {}, options: {}) {
  return new Schema(Object.assign({}, schema.obj, definition), options)
}

export { extendSchema }
