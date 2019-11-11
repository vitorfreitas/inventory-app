import { GraphQLServer } from 'graphql-yoga'
import { ContextParameters } from 'graphql-yoga/dist/types'
import { shield, not } from 'graphql-shield'

import { typeDefs, resolvers } from '../resources'
import { getUser } from '../resources/auth'
import { isAuthenticated } from '../resources/permissions'

const permissions = shield({
  Query: {
    '*': isAuthenticated
  },
  Mutation: {
    '*': isAuthenticated,
    login: not(isAuthenticated),
    createUser: not(isAuthenticated)
  }
})

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  middlewares: [permissions],
  context: (req: ContextParameters) => ({
    ...req,
    user: getUser(req)
  })
})

export default server
