const express = require('express');
const router = express.Router();
const packages = require("../controllers/packages.controller")



router.get('/packages', packages.allPackage ); 
router.post('/add_package', packages.addPackage ); 


module.exports = router;