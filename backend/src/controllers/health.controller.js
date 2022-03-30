const Health=require("../models/health.model")
const express=require("express")
const authenticate=require("../middlewares/authenticate")

const router=express.Router()


router.get("",authenticate,async(req,res)=>{
   try {
       const health= await Health.find({}).lean().exec()
       return res.status(200).send(personal)
   } catch (error) {
       return res.status(400).send(error)
   }
});



module.exports=router