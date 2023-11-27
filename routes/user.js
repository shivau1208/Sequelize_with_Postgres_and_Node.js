const express = require("express");
const User_DB  = require("../model/model1");
const router = express.Router();
const db = require('../config/DB')

router.get("/list", async (req, res) => {
  User_DB.findAll()
    .then((persons) => {
      res.send(persons);
    })
    .catch((err) => console.log(err));
});

router.get("/add", async(req, res) => {
  await db.sync()
  User_DB.create({
    firstName: "Shiva",
    lastName: "Umadi",
    email: "test@test.com",
  })
    .then(() => res.redirect("/users/list"))
    .catch((err) => console.log(err));
});

module.exports = router;
