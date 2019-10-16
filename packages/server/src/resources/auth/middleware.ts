import config from '../../config'
import User, { IUser } from '../users/model'

export default async function authMiddleware(
  resolve,
  root,
  args,
  context,
  info
) {
  return resolve(root, args, context, info)
}
