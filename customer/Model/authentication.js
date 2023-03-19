const {
    customer: CustomerSchema
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
}

module.exports = AuthenticationModel