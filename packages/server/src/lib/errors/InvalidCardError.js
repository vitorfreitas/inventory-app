class InvalidCardError extends Error {
    constructor(props) {
        super(props)
        this.name = 'InvalidCardError'
        this.code = 'invalid_card_number'
    }
}

export default InvalidCardError
