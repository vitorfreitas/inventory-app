import { Schema } from 'mongoose'
import * as jwt from 'jsonwebtoken'
import { ContextParameters } from 'graphql-yoga/dist/types'

import config from '../../config'
import logger from '../../lib/logger'

function getUser(req: ContextParameters): { id: Schema.Types.ObjectId } {
  const { authorization } = req.request.headers

  if (!authorization) {
    return { id: null }
  }

  const [_, token] = authorization.split(' ')

  if (!token) {
    return { id: null }
  }

  try {
    const { id: userId } = jwt.verify(token, config.JWT_SECRET) as {
      id: Schema.Types.ObjectId
    }

    return {
      id: userId
    }
  } catch (err) {
    logger.error(err)

    return { id: null }
  }
}

function generateToken(userId: Schema.Types.ObjectId): string {
  return jwt.sign({ id: userId }, config.JWT_SECRET)
}

export { getUser, generateToken }
