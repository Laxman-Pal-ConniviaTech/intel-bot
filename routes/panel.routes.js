const express = require('express');
const router = express.Router();
const authMidlleware = require("../middlewares/auth.moddleware")
const Users = require("../models/User.model")

router.get("/dashboard", authMidlleware.isUser  , (req , res) => {
    res.render('dashboard')
});


router.get("/users" , authMidlleware.isUser , (req , res) =>{
    // Users.findAll().then((users) => {
    //     res.render("users-table", {users: users });
    //   });


        Users.find().then((users) => {
                res.render("users-table", {users: users });
              });

})

module.exports = router;