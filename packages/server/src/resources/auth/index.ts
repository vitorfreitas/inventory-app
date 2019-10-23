import * as jwt from 'jsonwebtoken'

import config from '../../config'
import logger from '../../lib/logger'
import User, { IUser } from '../users/model'

async function getUser(authorization: string) {
  if (!authorization) {
    return null
  }

  const [_, token] = authorization.split(' ')

  if (!token) {
    return null
  }

  try {
    const { id: userId } = jwt.verify(token, config.JWT_SECRET) as {
      id: string
    }
    const user = await User.findById(userId)

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
