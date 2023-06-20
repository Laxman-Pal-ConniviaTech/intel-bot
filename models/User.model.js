const mongoose = require('mongoose');


const user = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    password: String
})


const userModel = mongoose.model('User', user );

module.exports = userModel;