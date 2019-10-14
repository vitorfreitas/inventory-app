import { GraphQLServer } from 'graphql-yoga'

import { typeDefs, resolvers } from '../resources'

import { getUser } from '../resources/auth'
import permissions from '../resources/auth/middleware'

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  middlewares: [],
  context: async req => ({
    ...req,
    user: await getUser(req)
  })
})

export default server
