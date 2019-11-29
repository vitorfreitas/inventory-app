import { Query } from 'mongoose'

import { ISale } from '../../../model'
import ProductModel, { IProduct } from '../../../../products/model'
import BaseProductModel, { IBaseProduct } from '../../../../baseProducts/model'

const populateProductDetails = (query: Query<IProduct>) => {
  return query
    .populate({
      path: 'combo',
      populate: [
        {
          path: 'details',
          populate: [
            {
              path: 'composition.details'
            }
          ]
        }
      ]
    })
    .populate('composition.details')
}

export default async function discountProductQuantity(sale: ISale) {
  for (const product of sale.products) {
    const productDetails = await populateProductDetails(
      ProductModel.findById(product.details)
    )

    if (productDetails.composition.length) {
      for (const baseProduct of productDetails.composition) {
        await BaseProductModel.updateOne(
          { _id: baseProduct.details.id },
          {
            $inc: {
              quantity: -(
                product.quantity *
                (baseProduct.quantity * baseProduct.details.quantityPerSale)
              )
            }
          }
        )
      }
    } else {
      await ProductModel.updateOne(
        { _id: product.details },
        {
          $inc: {
            quantity: -(product.quantity * productDetails.quantityPerSale)
          }
        }
      )
    }
  }
}
