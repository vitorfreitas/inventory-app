import { IUser } from '../users/model'
import { Customer } from '@stock/shared/interfaces'
import CustomerModel, { ICustomer } from './model'

const resolvers = {
  Query: {
    customers: async (
      root,
      args,
      context: { user: { id: string } }
    ): Promise<ICustomer[]> => {
      const { user } = context

      return CustomerModel.find({
        user: user.id
      })
    }
  },
  Mutation: {
    createCustomer: async (
      _,
      args: { customer: Customer },
      context: { user: { id: string } }
    ): Promise<ICustomer> => {
      const { user } = context
      const { customer } = args

      try {
        const createdUser = await CustomerModel.create({
          ...customer,
          user: user.id
        })

        return createdUser
      } catch (err) {
        throw new Error(err)
      }
    }
  }
}

export default resolvers
