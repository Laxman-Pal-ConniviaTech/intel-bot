const express = require('express');
const router = express.Router();
const authController = require("../controllers/auth.controller")


// GET Routes
router.get("/register", authController.getRegisteration);
router.get("/login", authController.getLogin);

// POST Routes
router.post("/register", authController.postRegistration);
router.post("/login", authController.postLogin);


module.exports = router;