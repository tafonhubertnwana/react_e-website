const bcrypt = require("bcrypt");
const Joi = require("joi");
const express = require('express');
const userJwt = require("../controllers/userjwt")
const { UserLogin } = require("../models/UserLogin")

const router = express.Router();

router.post("/login", async (req, res) => {
  const schema = Joi.object({
    email: Joi.string().min(3).max(200).required().email(),
    password: Joi.string().min(6).max(200).required(),
  });

  const {error} = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message)

  let user = await UserLogin.findOne({ email: req.body.email })

  if (!user) return res.status(400).send(" invalid email or password..");

  const isValid = await bcrypt.comapre(req.body.password, user.password)

  if (isValid) return res.status(400).send("Invalid email or password")

  const token = userJwt(user)

  res.send(token)
})

module.exports = router;

