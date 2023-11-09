const express = require('express')



const router = express.Router()
const bcrypt = require("bcrypt");
const Joi = require("joi");

//controller function
const { signupUser, loginUser} = require('../controllers/userController')


//Login route
router.post('/login', loginUser) 


//signup Router
router.post('/signup', signupUser)



module.exports = router
