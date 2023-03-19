const express = require('express');
const router = express.Router()
const { authentication: authValidator } = require('../Middleware/Validators');
const Authentication = require('../Middleware/authentication').authentication;

//CONTROLLERS
const AuthController = new (require('../Controller/authentication'));

//ROUTES
router.route('/sign-up')
    .post(authValidator.signup, Authentication, AuthController.signUp)

module.exports = router