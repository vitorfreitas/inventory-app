import config from '../../config'
import Customer, { ICustomer } from '../customers/model'

export default async function authMiddleware(
  resolve,
  root,
  args,
  context,
  info
) {
  return resolve(root, args, context, info)
}
