import { IUser } from '../users/model'

interface IAuthPayload {
  user?: IUser
  token?: string
}

export { IAuthPayload }
