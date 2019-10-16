import { IUser } from '../users/model'

interface IAuthPayload {
  user?: IUser
  token?: string
  errors?: string[]
}

export { IAuthPayload }
