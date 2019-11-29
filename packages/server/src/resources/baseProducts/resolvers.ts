import { BaseProduct } from '@stock/shared/interfaces'
import BaseProductModel, { IBaseProduct } from './model'

import logger from '../../lib/logger'

const resolvers = {
  Query: {
    baseProduct: async (
      root,
      args: { id: String },
      context: { user: { id: string } }
    ) => {
      const { id } = args
      const { user } = context

      try {
        const baseProduct = await BaseProductModel.findOne({
          _id: id,
          user: user.id
        })

        return baseProduct
      } catch (err) {
        logger.error(err)

        throw new Error(err)
      }
    },
    baseProducts: async (
      root,
      args,
      context: { user: { id: string } }
    ): Promise<IBaseProduct[]> => {
      const { user } = context

      return BaseProductModel.find({
        user: user.id,
        active: true
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
          _id: product.id
        },
        product
      )
    },
    deleteBaseProduct: async (
      root,
      args: { id: number },
      context,
      info
    ): Promise<{}> => {
      const { id } = args

      try {
        await BaseProductModel.updateOne(
          {
            _id: id
          },
          { active: false }
        )

        return {}
      } catch (err) {
        logger.error(err)

        throw new Error(err)
      }
    }
  }
}

export default resolvers
