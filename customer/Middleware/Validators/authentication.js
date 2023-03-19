const { header, body} = require('express-validator');

exports.signup = [
        body('email', 'Please enter valid email id!').notEmpty().isEmail(),
        body('password', 'Please enter password & make sure it has length between 6 to 16 characters.').trim().notEmpty(),
        body('first_name', 'Please enter valid first name!').trim().notEmpty(),
        body('last_name', 'Please enter valid last name!').trim().notEmpty(),
        body('user_name', 'Please enter user_name & make sure it dose not container space.').notEmpty(),
        body('country_code','Please enter country code').trim().notEmpty(),
        body("mobile_number","Please enter mobile number").trim().notEmpty()
];

