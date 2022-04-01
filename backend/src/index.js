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
const luxeController = require("./controllers/luxe.controller");
const healthController = require("./controllers/health.controller");  
const addressController = require("./controllers/address.controller"); 
const lifestyleController=require("./controllers/lifestyle.controller")
const petcareController = require("./controllers/lifestyle.controller");


app.post("/register", register);
app.post("/login", login);



app.use("/personals",personalcareController)
app.use("/skins", skincareController);
app.use("/luxe", luxeController);
app.use("/health", healthController);
app.use("/addresses",addressController);
app.use("/lifestyles", lifestyleController);
app.use("/pets", petcareController);

module.exports = app;
