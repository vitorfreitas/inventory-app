import { InvalidCPFError } from '../'

const validator = cpf => {
    const DEFAULT_LENGTH = 11

    if (cpf.length !== DEFAULT_LENGTH) return false

    for (let i = 0; i <= 9; i += 1) {
        if (cpf === `${i}`.repeat(DEFAULT_LENGTH)) return false
    }

    for (let digit = 9; digit <= 10; digit += 1) {
        let sum = 0 // acc function
        let num = 0 // index of number

        for (; num < digit; num += 1) {
            sum += parseInt(cpf[num], 10) * (digit - num + 1)
        }

        sum = ((10 * sum) % 11) % 10

        if (+cpf[num] !== sum) {
            return false
        }
    }

    return true
}

const checkIfCPFIsValid = (cpf, throwError = false) => {
    if (validator(cpf)) {
        return true
    }

    if (throwError) {
        throw new InvalidCPFError('O cpf informado é inválido.')
    }

    return false
}

export default checkIfCPFIsValid
