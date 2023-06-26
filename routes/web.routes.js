const express = require('express');
const router = express.Router();




router.get("/" , (req, res) => {
    res.render("web/home")
  });

  router.get("/about" , (req, res) => {
    res.render("web/about")
  });

  router.get("/use_case" , (req, res) => {
    res.render("web/use_case")
  });

  router.get("/contact" , (req, res) => {
    res.render("web/contact")
  });


module.exports = router;