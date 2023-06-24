const mongoose = require("mongoose");
const User = require("./User.model");
const Package = require("./Pakages.model");

const subscriptionSchema = new mongoose.Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    packageId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: Package
    },
    startDate : Date,
    endDate : Date
});

const Subscription = mongoose.model("Subscription" , subscriptionSchema);

module.exports = Subscription;