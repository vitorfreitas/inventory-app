import Customer, { ICustomer } from './model'

const resolvers = {
  Query: {
    customer: (_, { id }, context) => {
      console.log(context.user)

      // return Customer.findById(id)
    }
  },
  Mutation: {
    createCustomer: (_, { customer }): Promise<Partial<ICustomer>> => {
      return Customer.create(customer)
    }
  }
}

export default resolvers
