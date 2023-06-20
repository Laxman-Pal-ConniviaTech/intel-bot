const express = require("express");
const path = require("path");
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("./models/User.model");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 8080;

app.get("/", (req, res) => {
    res.render("dashboard")
});

app.get("/register", (req, res) => {
  res.render("auth/register");
});

app.get("/register", (req, res) => {
  res.render("auth/register");
});

app.post("/register", async (req, res) => {
  const { name, username, email, password } = req.body;

  try {
    const newUser = await new User({
      name,
      username,
      email,
      password,
    });

    const savedUser = await newUser.save();
    res.redirect("/login");
  } catch (error) {
    console.log(error);
  }
});

app.get("/login", (req, res) => {
  res.render("auth/login");
});

app.get("/login", (req, res) => {
  res.render("auth/login");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`MongoDB connected\nApp running on http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
