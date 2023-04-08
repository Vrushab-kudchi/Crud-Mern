const mongoose = require('../db/connect');

const userSchema = mongoose.Schema({
    name: String,
    phone_no:Number,
    email: String,
    city:String
})

const user = new mongoose.model("user", userSchema);

module.exports = user;

