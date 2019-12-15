import { Query } from 'mongoose'

import { IUser } from '../users/model'
import { Product } from '@inventory/shared/interfaces'
import ProductModel, { IProduct } from './model'

import logger from '../../lib/logger'

const populateDetails = (query: Query<IProduct | IProduct[]>) => {
  return query
    .populate({
      path: 'composition.details'
    })
    .populate({
      path: 'combo.details',
      populate: [{ path: 'composition.details' }]
    })
}

const resolvers = {
  Query: {
    product: async (
      root,
      args: { id: String },
      context: { user: { id: string } }
    ) => {
      const { id } = args
      const { user } = context

      try {
        const product = await populateDetails(
          ProductModel.findOne({
            _id: id,
            user: user.id
          })
        )

        return product
      } catch (err) {
        logger.error(err)

        throw new Error(err)
      }
    },
    products: async (
      root,
      args,
      context: { user: { id: string } }
    ): Promise<IProduct[]> => {
      const { user } = context

      try {
        const products = await populateDetails(
          ProductModel.find({
            user: user.id,
            active: true
          })
        )

        return products as IProduct[]
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
        const normalizedProduct = {
          ...product,
          user: user.id,
          combo: product.combo.map(item => {
            return {
              details: item.id,
              quantity: item.quantity
            }
          }),
          composition: product.composition.map(item => {
            return {
              details: item.id,
              quantity: item.quantity
            }
          })
        }

        const { id } = await ProductModel.create(normalizedProduct)
        const createdProduct = await populateDetails(ProductModel.findById(id))

        return createdProduct as IProduct
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
        const updatedProduct = await ProductModel.findOneAndUpdate(
          {
            _id: product.id
          },
          product
        )

        return updatedProduct
      } catch (err) {
        logger.error(err)

        console.error(err)

        throw new Error(err)
      }
    },
    deleteProduct: async (
      root,
      args: { id: number },
      context,
      info
    ): Promise<{}> => {
      const { id } = args

      try {
        await ProductModel.updateOne(
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
