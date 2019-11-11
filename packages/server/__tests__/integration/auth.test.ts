import gql from 'graphql-tag'
import { GraphQLServer } from 'graphql-yoga'

import { typeDefs, resolvers } from '../../src/resources'

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user
      errors
    }
  }
`

describe('Auth', () => {
  it('should return a valid token', async () => {
    expect(res.data.login).toEqual('YUBhLmE=')
  })
})
