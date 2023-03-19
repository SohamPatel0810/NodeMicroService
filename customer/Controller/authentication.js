const AuthenticationModel = new (require('../Model/authentication'));
const { STATUS_CODES } = (require('../Configs/constants'));

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
}

module.exports = AuthenticationController