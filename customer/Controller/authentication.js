import AuthenticationModel from "../Model/authentication"
import {STATUS_CODES} from '../Configs/constants'

class AuthenticationController {

    async signUp(req,res) {
        let customerExists = await AuthenticationModel.findCustomerByEmail(req.body.email);
        if(customerExists) {
            return res.handler.custom(STATUS_CODES.CONFLICT, 'VALIDATION.EXISTS.EMAIL');
        }
        
    }
}

module.exports = AuthenticationController