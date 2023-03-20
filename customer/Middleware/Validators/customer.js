const { header, body} = require('express-validator');

exports.getCustomerProfile = [
    header('auth_token','auth token field is required').trim().notEmpty()
];
