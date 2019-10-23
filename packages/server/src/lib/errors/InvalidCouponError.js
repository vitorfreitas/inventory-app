class InvalidCouponError extends Error {
    constructor(props) {
        super(props)
        this.name = 'InvalidCouponError'
    }
}

export default InvalidCouponError
