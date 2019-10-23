import { GraphQLServer } from 'graphql-yoga'

import { typeDefs, resolvers } from '../resources'
import { getUser } from '../resources/auth'

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  middlewares: [],
  context: async req => {
    const authorization = req.request.headers.authorization

    return {
      ...req,
      user: await getUser(authorization)
    }
  }
})

export default server
