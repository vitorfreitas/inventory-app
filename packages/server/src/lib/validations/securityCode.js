import { InvalidSecurityCodeError } from '..'

const checkIfSecurityCodeIsValid = securityCode => {
    // only digits
    const regex = /^[0-9]*$/
    const isValid = regex.test(securityCode) && securityCode.length >= 3

    if (!isValid) {
        throw new InvalidSecurityCodeError(
            'O código de segurança informado é inválido'
        )
    }
}

export default checkIfSecurityCodeIsValid
