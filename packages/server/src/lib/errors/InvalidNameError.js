class InvalidNameError extends Error {
    constructor(props) {
        super(props)
        this.name = 'InvalidNameError'
        this.code = 'invalid_name'
    }
}

export default InvalidNameError
