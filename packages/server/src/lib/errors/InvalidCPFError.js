class InvalidCPFError extends Error {
    constructor(props) {
        super(props)
        this.name = 'InvalidCPFError'
        this.code = 'invalid_cpf'
    }
}

export default InvalidCPFError
