class InvalidSecurityCodeError extends Error {
    constructor(props) {
        super(props)
        this.name = 'InvalidSecurityCodeError'
        this.code = 'invalid_security_code'
    }
}

export default InvalidSecurityCodeError
