const { customer: CustomerSchema } = require('../Database/Schemas')
class CustomerModel {
    async getCustomerProfile(customerId) {
        return await CustomerSchema.findOne({ _id: customerId })
    }
}

module.exports = CustomerModel