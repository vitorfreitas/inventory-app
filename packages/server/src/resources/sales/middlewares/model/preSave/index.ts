import calculeSalePrice from './calculeSalePrice'

export default async function preSave(next) {
  await calculeSalePrice(this)

  next()
}
