const mongoose = require('mongoose');


const pacakagesSchema = new mongoose.Schema({
    name : String,
    discription : String,
    amount : Number,
    interval : Number,
})

const Package = mongoose.model("Package" , pacakagesSchema);

module.exports = Package;