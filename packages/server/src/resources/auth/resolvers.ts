import Customer, { ICustomer } from '../customers/model'
import { generateToken } from '../auth/'
import { INVALID_CREDENTIALS } from '../../lib/errors'

const resolvers = {
  Mutation: {
    login: async (_, { email, password }) => {
      const customer = await Customer.findOne({ email: email.toLowerCase() })

      if (!customer) {
        return {
          error: INVALID_CREDENTIALS
        }
      }

      const passwordIsCorrect = customer.authenticate(password)

      if (!passwordIsCorrect) {
        return {
          error: INVALID_CREDENTIALS
        }
      }

      return {
        token: generateToken(customer.id),
        customer
      }
    }
  }
}

export default resolvers
