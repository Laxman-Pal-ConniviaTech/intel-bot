const express = require("express");
const path = require("path");
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require('express-session');
const authMiddleware = require("./middlewares/auth.moddleware");
const cors = require("cors");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); 

//  Require Models
const User = require("./models/User.model");

const app = express();
const port = 8080;

// Static Files and EJS
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", "views");

// Global Middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));
app.use(cors());



app.get("/", authMiddleware.isUser  , (req, res) => {
  res.render("dashboard")
});



// Routes

app.use(require("./routes/auth.routes"));
app.use(require("./routes/packages.routes"));
app.use(require("./routes/subscription.routes"));




mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`MongoDB connected\nApp running on http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));