import { BaseProduct } from '@stock/shared/interfaces'
import BaseProductModel, { IBaseProduct } from './model'

import logger from '../../lib/logger'

const resolvers = {
  Query: {
    baseProducts: async (
      root,
      args,
      context: { user: { id: string } }
    ): Promise<IBaseProduct[]> => {
      const { user } = context

      return BaseProductModel.find({
        user: user.id
      })
    }
  },
  Mutation: {
    createBaseProduct: async (
      root,
      args: { product: BaseProduct },
      context: { user: { id: string } }
    ): Promise<IBaseProduct> => {
      const { user } = context
      const { product } = args

      try {
        const createdBaseProduct = await BaseProductModel.create({
          ...product,
          user: user.id
        })

        return createdBaseProduct
      } catch (err) {
        logger.error(err)

        throw new Error(err)
      }
    },
    updateBaseProduct: async (root, args: { product: IBaseProduct }) => {
      const { product } = args

      return BaseProductModel.updateOne(
        {
          id: product.id
        },
        product
      )
    }
  }
}

export default resolvers
