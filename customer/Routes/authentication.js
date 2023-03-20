const express = require('express');
const router = express.Router()
const { authentication: authValidator } = require('../Middleware/Validators');
const Authentication = require('../Middleware/authentication').authentication;

//CONTROLLERS
const AuthController = new (require('../Controller/authentication'));

//ROUTES
router.route('/sign-up')
    .post(authValidator.signup, AuthController.signUp)

router.route('/login')
    .post(authValidator.login,AuthController.login)

module.exports = router