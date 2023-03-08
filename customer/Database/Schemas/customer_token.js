const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CustomerTokenSchema = new Schema({
    customer_id: {
        type: Schema.Types.ObjectId,
    },
    auth_token:{
        type: String,
        required:true
    }
},{
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
});

module.exports =  mongoose.model('customer_token', CustomerTokenSchema);