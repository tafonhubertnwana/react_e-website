const express = require('express')

const router = express.Router()
const bcrypt = require("bcrypt");
const Joi = require("joi");


const UserLogin = require("../models/UserLogin")
const userJwt = require("../controllers/userjwt")

//login route
router.post('/register', async (req, res) => {
  //joi
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().min(3).max(200).required().email(),
    password: Joi.string().min(6).max(1024).required(),
  })
  const{ error } = schema.validate(req.body);
  if(error) return res.status(400).send(error.details[0].message);

  let user = await UserLogin.findOne({ email: req.body.email })

  if(user) return res.status(400).send("User already exist..")

  user = new UserLogin({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  //bcrypt
  const salt = await bcrypt.genSalt(10);

  user.password = await bcrypt.hash(user.password, salt)

  user = await user.save()

  const token = userJwt(user)

  //send to frontend
  res.send(token)
});



module.exports = router
