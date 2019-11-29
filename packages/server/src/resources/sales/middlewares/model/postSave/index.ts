import { ISale } from '../../../model'

import discountProductQuantity from './discountProductQuantity'

export default async function postSave(sale: ISale, next) {
  await discountProductQuantity(sale)

  next()
}
