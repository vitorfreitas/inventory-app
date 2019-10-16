import { Error } from 'mongoose'

function getValidationErrorsMessages(err: Error.ValidationError): string[] {
  return Object.keys(err.errors).map(error => err.errors[error].toString())
}

export { getValidationErrorsMessages }
