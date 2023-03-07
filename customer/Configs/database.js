const mongoose = require('mongoose')

//BUILD A CONNECTION
mongoose.connect(process.env.MONGODB_URL, {
    dbName: process.env.DB_NAME,
}).then(() => {
    console.log('Database connection established')
}).catch(err => console.log('error', err));

//REPLACE MONGOOSE PROMISE BY BLUEBIRD
mongoose.Promise = require('bluebird');

module.exports.mongoose = mongoose