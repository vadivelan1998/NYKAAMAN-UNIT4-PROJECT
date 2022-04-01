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
const petcareController = require("./controllers/petcare.controller"); 
const lifeStyleController = require("./controllers/lifestyle.controller"); 
const hairController=require("./controllers/hair.controller")
const hairstyleController=require("./controllers/hairstyle.controller");
const professionalhairController = require("./controllers/professionalhair.controller.JS");
const perfumeControleer=require("./controllers/perfume.controller")
app.post("/register", register);
app.post("/login", login);

app.use("/personals",personalcareController)
app.use("/skins", skincareController);
 app.use("/pets", petcareController);
 app.use("/lifestyles", lifeStyleController);
 app.use("/hairs",hairController)
 app.use("/hairstyles",hairstyleController)
 app.use("/professionalhairs", professionalhairController)
 app.use("/perfumes",perfumeControleer)

 
module.exports = app;
