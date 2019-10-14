import Product, { IProduct } from './model'

const resolvers = {
  Query: {
    product: (_, { id }) => Product.findById(id),
    products: () => Product.find({})
  },
  Mutation: {
    createProduct: (
      root,
      { product },
      context,
      info
    ): Promise<Partial<IProduct>> => {
      console.log(context)
      console.log(context.user)
      console.log(product)

      return Product.create(product)
    }
  }
}

export default resolvers
