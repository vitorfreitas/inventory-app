import { ISale } from '../../../model'
import ProductModel from '../../../../products/model'

export default async function caculateSalePrice(sale: ISale) {
  const productsPrice = await sale.products.reduce(
    async (priceAcc, product) => {
      const currentPrice = await priceAcc
      const productDetails = await ProductModel.findById(product.details)

      return currentPrice + productDetails.price * product.quantity
    },
    Promise.resolve(0)
  )

  const orderPrice = Math.max(productsPrice - sale.discount, 0)

  sale.price = orderPrice
}
