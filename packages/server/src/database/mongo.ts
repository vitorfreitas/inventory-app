import * as mongoose from 'mongoose'

import logger from '../lib/logger'
import config from '../config'

const {
  MONGO_DATABASE_HOST,
  MONGO_DATABASE_PASSWORD,
  MONGO_DATABASE_USERNAME,
  MONGO_DATABASE_PORT,
  MONGO_DATABASE_NAME
} = config

const databaseConfig = (): string => {
  const protocol = 'mongodb://'

  return protocol
    .concat(MONGO_DATABASE_USERNAME)
    .concat(':')
    .concat(MONGO_DATABASE_PASSWORD)
    .concat('@')
    .concat(MONGO_DATABASE_HOST)
    .concat(':')
    .concat(MONGO_DATABASE_PORT)
    .concat('/')
    .concat(MONGO_DATABASE_NAME)
}

function connectDatabase() {
  const mongoConfig = databaseConfig()

  return new Promise((resolve, reject) => {
    mongoose.connection
      .once('open', () => resolve(mongoose.connections[0]))
      .on('error', error => reject(error))
      .on('close', () => logger.warn('MongoDB connection closed.'))

    mongoose.connect(mongoConfig, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  })
}

export default connectDatabase
