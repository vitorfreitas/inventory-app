import * as jwt from 'jsonwebtoken'

import config from '../../config'
import logger from '../../lib/logger'
import Customer, { ICustomer } from '../customers/model'

async function getUser(req) {
  const authorization = req.request.headers.authorization

  if (!authorization) {
    return null
  }

  const [_, token] = authorization.split(' ')

  if (!token) {
    return null
  }

  try {
    const decodedToken = jwt.verify(token, config.JWT_SECRET)
    const user = await Customer.findById((decodedToken as { id: string }).id)

    return user
  } catch (err) {
    logger.error(err)

    return null
  }
}

function generateToken(userId: string): string {
  return jwt.sign({ id: userId }, config.JWT_SECRET)
}

export { getUser, generateToken }
