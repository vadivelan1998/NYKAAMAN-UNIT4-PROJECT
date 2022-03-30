const express = require("express");
const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use(express.json());

const { register, login } = require("./controllers/auth.controller");

const personalcareController=require("./controllers/personalcare.controller") 
const skincareController = require("./controllers/skincare.controller"); 


app.post("/register", register);
app.post("/login", login);

app.use("/personals",personalcareController)
app.use("/skins", skincareController);

module.exports = app;
