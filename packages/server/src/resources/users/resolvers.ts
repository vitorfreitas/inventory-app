import { generateToken } from '../auth'
import { IAuthPayload } from '../auth/model'
import { getValidationErrorsMessages } from '../../utils'

import User, { IUser } from './model'

const resolvers = {
  Query: {
    user: (root, args, { user }) => user
  },
  Mutation: {
    createUser: async (_, { user }): Promise<IAuthPayload> => {
      try {
        const createdUser = await User.create(user)

        return {
          token: generateToken(createdUser.id),
          user: createdUser
        }
      } catch (err) {
        return {
          errors: getValidationErrorsMessages(err)
        }
      }
    }
  }
}

export default resolvers
