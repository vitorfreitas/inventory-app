import * as dotenv from 'dotenv'

dotenv.config({
  path: process.env.NODE_ENV === 'development' ? '.env.development' : '.env'
})

interface Environment {
  NODE_ENV: string
  API_PORT: string
  JWT_SECRET: string
  EMAIL_SERVICE_URL?: string
  MONGO_DATABASE_HOST: string
  MONGO_DATABASE_PORT: string
  MONGO_DATABASE_NAME: string
  MONGO_DATABASE_USERNAME: string
  MONGO_DATABASE_PASSWORD: string
}

const requiredEnvironmentKeys = [
  'NODE_ENV',
  'API_PORT',
  'JWT_SECRET',
  'MONGO_DATABASE_HOST',
  'MONGO_DATABASE_PORT',
  'MONGO_DATABASE_NAME',
  'MONGO_DATABASE_USERNAME',
  'MONGO_DATABASE_PASSWORD'
]

requiredEnvironmentKeys.forEach(key => {
  if (!process.env[key]) {
    throw new Error(`${key} is not defined. Define it and try again!`)
  }
})

const environment: Environment = {
  NODE_ENV: process.env.NODE_ENV,
  API_PORT: process.env.API_PORT,
  JWT_SECRET: process.env.JWT_SECRET,
  EMAIL_SERVICE_URL: process.env.EMAIL_SERVICE_URL,
  MONGO_DATABASE_HOST: process.env.MONGO_DATABASE_HOST,
  MONGO_DATABASE_PORT: process.env.MONGO_DATABASE_PORT,
  MONGO_DATABASE_NAME: process.env.MONGO_DATABASE_NAME,
  MONGO_DATABASE_USERNAME: process.env.MONGO_DATABASE_USERNAME,
  MONGO_DATABASE_PASSWORD: process.env.MONGO_DATABASE_PASSWORD
}

export { Environment }
export default environment
