import { generateToken } from '../auth'
import { IAuthPayload } from '../auth/model'
import { User } from '@stock/shared/interfaces'

import UserModel, { IUser } from './model'

const resolvers = {
  Query: {
    user: async (
      root,
      args,
      context: { user: { id: string } }
    ): Promise<IUser> => {
      const { user } = context

      return UserModel.findOne({ id: user.id })
    }
  },
  Mutation: {
    createUser: async (_, args: { user: User }): Promise<IAuthPayload> => {
      const { user } = args

      try {
        const createdUser = await UserModel.create(user)

        return {
          token: generateToken(createdUser.id),
          user: createdUser
        }
      } catch (err) {
        throw new Error(err)
      }
    }
  }
}

export default resolvers
