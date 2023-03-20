const { validationResult } = require('express-validator');
const { customer_token: CustomerTokenSchema } = require('../Database/Schemas')
exports.authentication = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.handler.validationError(
            undefined,
            errors.array()
        );

    // USED FOR WHEN AUTHENTICATION IS OPTIONAL
    if (!req.headers.auth_token)
        return next()

    let data = await CustomerTokenSchema.aggregate([
        {
            $match: { auth_token: req.headers.auth_token },
        },
        { $project: { "customer_id": 1, } }
    ])

    if (data.length < 1)
        return res.handler.unauthorized();

    req.headers.customerId = data[0].customer_id;

    next()
};