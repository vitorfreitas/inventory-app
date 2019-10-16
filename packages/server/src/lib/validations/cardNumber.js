import { InvalidCardError } from '..'

const checkIfCardNumberIsValid = cardNumber => {
    // only digits
    const regex = /^[0-9]*$/
    const isValid = regex.test(cardNumber) && cardNumber.length >= 11

    if (!isValid) {
        throw new InvalidCardError('O número de cartão informado é inválido.')
    }
}

export default checkIfCardNumberIsValid
