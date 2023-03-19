const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    user_name: {
        type: String,
        required: true
    },
    mobile_number: {
        type: Number,
        required: true
    },
    country_code: {
        type: String,
        required: true
    },
    street_name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    cart: [
        {
          product: { 
                _id: { type: String, require: true},
                name: { type: String},
                banner: { type: String},
                price: { type: Number},
            },
          unit: { type: Number, require: true}
        }
    ],
    orders: [
        {
            _id: {type: String, required: true},
            amount: { type: String},
            date: {type: Date}
        }
    ]
},{
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
});

module.exports =  mongoose.model('customer', CustomerSchema);