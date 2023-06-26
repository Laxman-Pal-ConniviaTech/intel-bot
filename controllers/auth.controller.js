const User = require("../models/User.model")
const bcrypt = require('bcrypt');


exports.getRegisteration = (req, res) => {
    res.render("auth/register");
}

exports.postRegistration = async (req, res) => {
    const {
        name,
        email,
        password,
    } = req.body;


    try {
        const hashPassword = await bcrypt.hash(password, 12);

        const newUser = await new User({
            name,
            email,
            password: hashPassword,
        });

     await newUser.save();
        res.redirect("/login");
    } catch (error) {
        console.log(error);
    }
}


exports.getLogin = (req, res) => {
    res.render("auth/login");
}


exports.postLogin = async (req, res) => {
    const {
        username,
        password
    } = req.body;
    try {
        const user = await User.findOne({
            username
        });

        if (!user) {
            return res.redirect("/register");
        }

        const isMatch = await bcrypt.compare(password, user.password);


        if (!isMatch) {
            return res.redirect("/login");
        }

        req.session.userId = user._id;
        res.redirect("/dashboard");
    } catch (error) {
        console.log(error);
    }
}