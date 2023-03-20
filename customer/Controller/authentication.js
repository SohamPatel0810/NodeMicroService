const AuthenticationModel = new (require('../Model/authentication'));
const { STATUS_CODES } = (require('../Configs/constants'));
const Encrypt = new(require('../Configs/encryption'))();

class AuthenticationController {

    async signUp(req, res) {
        try {
            let customerExists = await AuthenticationModel.findCustomerByEmail(req.body.email);
            if (customerExists) {
                return res.handler.custom(STATUS_CODES.CONFLICT, 'VALIDATION.EXISTS.EMAIL');
            }
            let newUser = await AuthenticationModel.addNewUser(req.body)
            if (newUser) {
                return res.handler.success('CREATED.USER');
            }
        } catch (error) {
            console.log(error);
            return res.handler.serverError(error);
        }
    }

    async login(req, res) {
        try {
            let customerExists = await AuthenticationModel.findCustomerByEmail(req.body.email);
            if (!customerExists) {
                return res.handler.conflict(STATUS_CODES.CONFLICT, 'VALIDATION.NOT_EXISTS.USER');
            }
            if (req.body.password) {
                let isPasswordValid = Encrypt.compareBcrypt(req.body.password, customerExists.password)
                if (!isPasswordValid) {
                    return res.handler.custom(STATUS_CODES.CONFLICT, 'VALIDATION.PASSWORD.INCORRECT')
                }
            }
            let loginDeatils = await AuthenticationModel.login(customerExists._id)
            if (loginDeatils) {
                return res.handler.success('SUCCESS.TOKEN_CREATED', loginDeatils);
            }
        } catch (error) {
            console.log(error);
            return res.handler.serverError(error);
        }
    }
}

module.exports = AuthenticationController