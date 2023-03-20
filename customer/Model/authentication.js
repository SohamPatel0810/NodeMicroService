const {
    customer: CustomerSchema,
    customer_token:CustomerTokenSchema
} = require('./../Database/Schemas')
const Encrypt = new(require('../Configs/encryption'))();
class AuthenticationModel {
    async findCustomerByEmail(emailId) {
        return await CustomerSchema.findOne({
            email: emailId
        });
    }

    async addNewUser(user) {
        if (user.password) {
            user.password = Encrypt.bcrypt(user.password);
        }
        let newUser = await CustomerSchema(user)
        return await newUser.save();
    }

    async login(customerId) {
        let token = Encrypt.generateAuthToken();
        let loginData = await CustomerTokenSchema({
            customer_id: customerId,
            auth_token: token
        })
        return await loginData.save();
    }
}

module.exports = AuthenticationModel