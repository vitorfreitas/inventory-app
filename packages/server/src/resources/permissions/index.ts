import { rule } from 'graphql-shield'

const isAuthenticated = rule({ cache: 'contextual' })(
  async (parent, args, ctx) => {
    return ctx.user.id !== null
  }
)

export { isAuthenticated }
