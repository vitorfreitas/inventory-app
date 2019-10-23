class UserNotAllowedToUseOnlinePayment extends Error {
    constructor(props) {
        super(props)
        this.name = 'UserNotAllowedToUseOnlinePayment'
        this.code = 'user_not_allowed'
    }
}

export default UserNotAllowedToUseOnlinePayment
