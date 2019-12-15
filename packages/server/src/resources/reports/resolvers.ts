import SaleModel, { ISale } from '../sales/model'

import logger from '../../lib/logger'

const resolvers = {
  Query: {
    reports: async (root, args: { from: Date; to: Date }) => {
      const { from, to } = args

      if (from <= to) return args

      throw new Error('Invalid Period')
    }
  },
  Reports: {
    async sales(
      period: { from: Date; to: Date },
      args,
      context: { user: { id: string } }
    ) {
      const sales = await SaleModel.find({
        user: context.user.id,
        createdAt: {
          $gte: new Date(period.from),
          $lte: new Date(period.to)
        }
      })

      return {
        title: 'Sales',
        content: sales.length,
        items: sales
      }
    }
  }
}

export default resolvers
