import { Query } from 'mongoose'
import { Sale } from '@inventory/shared/interfaces'
import { SaleItem } from '@inventory/shared/interfaces/sale'

import logger from '../../lib/logger'
import SaleModel, { ISale } from './model'
import ProductModel from '../products/model'

function populateDetails(query: Query<ISale | ISale[]>) {
  return query
    .populate({
      path: 'customer'
    })
    .populate({
      path: 'products.details.composition.details'
    })
    .populate({
      path: 'products.details.combo.details',
      populate: [{ path: 'composition.details' }]
    })
}

function getSaleItemsByProducts(products: SaleItem[]) {
  const populatedProducts = products.map(async product => {
    const populatedProduct = await ProductModel.findById(product.id)

    return {
      details: populatedProduct,
      quantity: product.quantity
    }
  })

  return Promise.all(populatedProducts)
}

const resolvers = {
  Query: {
    sale: async (
      root,
      args: { id: string },
      context: { user: { id: string } }
    ): Promise<ISale> => {
      const { id } = args
      const { user } = context

      try {
        const sale = await populateDetails(
          SaleModel.findOne({
            _id: id,
            user: user.id
          })
        )

        return sale as ISale
      } catch (err) {
        logger.error(err)

        throw new Error(err)
      }
    },
    sales: async (
      root,
      args,
      context: { user: { id: string } }
    ): Promise<ISale[]> => {
      const { user } = context

      try {
        const sales = await populateDetails(
          SaleModel.find({
            user: user.id
          })
        )

        return sales as ISale[]
      } catch (err) {
        logger.error(err)

        throw new Error(err)
      }
    }
  },
  Mutation: {
    createSale: async (
      root,
      args: { sale: Sale },
      context: { user: { id: string } }
    ) => {
      const { user } = context
      const { sale } = args

      const normalizedSale = {
        ...sale,
        user: user.id,
        products: await getSaleItemsByProducts(sale.products)
      }

      try {
        const { id } = await SaleModel.create(normalizedSale)
        const createdSale = await populateDetails(SaleModel.findById(id))

        return createdSale as ISale
      } catch (err) {
        logger.error(err)

        throw new Error(err)
      }
    }
  }
}

export default resolvers
