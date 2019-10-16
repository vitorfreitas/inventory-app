import { generateToken } from '../auth/'
import { IAuthPayload } from './model'

import User, { IUser } from '../users/model'

import { INVALID_CREDENTIALS } from '../../lib/errors'

const resolvers = {
  Mutation: {
    login: async (_, { email, password }): Promise<IAuthPayload> => {
      const user = await User.findOne({ email: email.toLowerCase() })

      if (!user) {
        return {
          errors: [INVALID_CREDENTIALS]
        }
      }

      const passwordIsCorrect = user.authenticate(password)

      if (!passwordIsCorrect) {
        return {
          errors: [INVALID_CREDENTIALS]
        }
      }

      return {
        token: generateToken(user.id),
        user
      }
    }
  }
}

export default resolvers
