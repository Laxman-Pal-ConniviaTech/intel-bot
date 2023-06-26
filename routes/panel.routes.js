const express = require('express');
const router = express.Router();
const authMidlleware = require("../middlewares/auth.moddleware")

router.get("/dashboard", authMidlleware.isUser  , (req , res) => {
    res.render('dashboard')
});


module.exports = router;