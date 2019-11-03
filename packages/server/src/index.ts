import { Options } from 'graphql-yoga'

import server from './app'
import config from './config/'
import logger from './lib/logger/'
import setupDatabase from './database'

const { API_PORT = 3000 } = config

const options: Options = {
  port: API_PORT,
  tracing: true,
  playground: config.NODE_ENV === 'development' ? '/' : false,
  endpoint: '/graphql'
}

setupDatabase()
  .then(() => {
    server.start(options, () =>
      logger.info(`Server is running on http://localhost:${API_PORT}`)
    )
  })
  .catch(err => logger.error(err.message))
