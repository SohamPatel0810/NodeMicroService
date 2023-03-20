const CustomerModel = new (require('../Model/customer'));
const { STATUS_CODES } = (require('../Configs/constants'));

class CustomerController {
    async getCustomerProfile(req, res) {
        try {
            let customer = await CustomerModel.getCustomerProfile(req.headers.customerId)
            if (!customer) {
                return res.handler.conflict('VALIDATION.NOT_EXISTS.USER');
            }
            return res.handler.success('STATUS_CODES.SUCCESS', customer)
        } catch (error) {
            console.log(error)
            return res.handler.serverError(error)
        }
    }
}

module.exports = CustomerController