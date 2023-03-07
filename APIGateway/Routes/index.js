const express = require('express');
const router = express.Router();
const proxy = require('express-http-proxy');

router.get('/',proxy('http://localhost:3857')); //products
router.get('/customers',proxy('http://localhost:5823'));
router.get('/shopping',proxy('http://localhost:8001'));

module.exports = router;