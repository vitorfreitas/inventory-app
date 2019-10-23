import { User } from '@stock/shared/interfaces'

import { generateToken } from '../auth/'
import UserModel, { IUser } from '../users/model'
import { IAuthPayload } from './model'
import { INVALID_CREDENTIALS } from '../../lib/errors'

const resolvers = {
  Mutation: {
    login: async (_, args: User): Promise<IAuthPayload> => {
      const { email, password } = args
      const user: IUser = await UserModel.findOne({
        email: email.toLowerCase()
      })

      if (!user) {
        throw new Error(INVALID_CREDENTIALS)
      }

      const passwordIsCorrect = user.authenticate(password)

      if (!passwordIsCorrect) {
        throw new Error(INVALID_CREDENTIALS)
      }

      return {
        token: generateToken(user.id),
        user
      }
    }
  }
}

export default resolvers
