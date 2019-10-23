import { IUser } from '../users/model'
import { Product } from '@stock/shared/interfaces'
import ProductModel, { IProduct } from './model'

import logger from '../../lib/logger'

const resolvers = {
  Query: {
    products: async (
      root,
      args,
      context: { user: { id: string } }
    ): Promise<IProduct[]> => {
      const { user } = context

      try {
        const products = await ProductModel.find({ user: user.id })
          .populate('combo')
          .populate('composition')

        return products
      } catch (err) {
        logger.error(err)

        throw new Error(err)
      }
    }
  },
  Mutation: {
    createProduct: async (
      root,
      args: { product: Product },
      context: { user: { id: string } }
    ): Promise<IProduct> => {
      const { user } = context
      const { product } = args

      try {
        const createdProduct = await ProductModel.create({
          ...product,
          user: user.id
        })

        return createdProduct
      } catch (err) {
        logger.error(err)

        throw new Error(err)
      }
    },
    updateProduct: async (
      root,
      args: { product: IProduct }
    ): Promise<IProduct> => {
      const { product } = args

      try {
        const updatedProduct = await ProductModel.updateOne(
          {
            id: product.id
          },
          product
        )

        return updatedProduct
      } catch (err) {
        logger.error(err)

        throw new Error(err)
      }
    }
  }
}

export default resolvers
