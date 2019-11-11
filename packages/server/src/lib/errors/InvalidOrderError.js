class InvalidOrderError extends Error {
    constructor(message, error) {
        super(message)
        this.name = 'InvalidOrderError'
        this.error = error
    }
}

export default InvalidOrderError
