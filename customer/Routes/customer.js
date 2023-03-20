const express = require('express');
const router = express.Router()
const { customer: customerValidator } = require('../Middleware/Validators');
const Authentication = require('../Middleware/authentication').authentication;

//CONTROLLERS
const CustomerController = new (require('../Controller/customer'));

//ROUTES
router.route('/profile')
    .get(customerValidator.getCustomerProfile,Authentication, CustomerController.getCustomerProfile)

module.exports = router