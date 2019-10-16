import { IUser } from '../model'
import { IProduct } from './model'

const resolvers = {
  Query: {
    atomProducts: (root, args, { user }: { user: IUser }): IProduct[] => {
      const { products } = user

      return products.filter(product => !product.composition.length)
    }
  },
  Mutation: {
    createProduct: async (
      root,
      { product }: { product: IProduct },
      { user }: { user: IUser }
    ): Promise<IProduct> => {},
    updateProduct: (
      root,
      { product }: { product: IProduct },
      { user }: { user: IUser }
    ) => {}
  }
}

export default resolvers
