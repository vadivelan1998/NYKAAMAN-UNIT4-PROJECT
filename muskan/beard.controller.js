const Beard = require("../models/beard.model")
const express = require("express");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const shaving = await Beard.find({}).lean().exec();
    return res.status(200).send(Beard);
  } catch (error) {
    return res.status(400).send(error);
  }
});

module.exports = router;