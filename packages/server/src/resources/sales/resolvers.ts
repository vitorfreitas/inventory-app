import { Query } from 'mongoose'
import { Sale } from '@stock/shared/interfaces'

import logger from '../../lib/logger'
import SaleModel, { ISale } from './model'

const populateDetails = (query: Query<ISale | ISale[]>) => {
  return query
    .populate({
      path: 'products.details',
      populate: [
        {
          path: 'combo.details',
          populate: [
            {
              path: 'composition.details'
            }
          ]
        },
        { path: 'composition.details' }
      ]
    })
    .populate({
      path: 'customer'
    })
}

const resolvers = {
  Query: {
    sale: async (
      root,
      args: { id: string },
      context: { user: { id: string } }
    ): Promise<ISale> => {
      const { id: saleId } = args
      const { user } = context

      console.log(saleId)
      console.log(user)

      try {
        const sale = await populateDetails(
          SaleModel.findOne({
            _id: saleId,
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
    ): Promise<ISale> => {
      const { user } = context
      const { sale } = args

      console.log(sale)

      const normalizedSale = {
        ...sale,
        user: user.id,
        products: sale.products.map(product => {
          return {
            details: product.id,
            quantity: product.quantity,
            composition: product.composition.map(baseProduct => {
              return {
                details: baseProduct.id,
                quantity: baseProduct.quantity
              }
            }),
            combo: product.combo.map(comboProduct => {
              return {
                details: comboProduct.id,
                quantity: comboProduct.quantity,
                composition: comboProduct.composition.map(
                  comboProductCompostion => {
                    return {
                      details: comboProductCompostion.id,
                      quantity: comboProductCompostion.quantity
                    }
                  }
                )
              }
            })
          }
        })
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
