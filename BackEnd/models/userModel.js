const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const validator = require('validator')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30
  },

  email: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 200,
    unique: true
  },

  password: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 1024,
    unique: false
  }
});

//Static signup method
userSchema.statics.signup = async function( name, email, password) {

  //validation
  if(!email || !password) {
  throw Error("All fields must be filled")
  }

  if(!validator.isEmail(email)){
    throw Error("Email is not valid")
  }

  if(!validator.isStrongPassword(password)){
    throw Error("Password not strong enough")
  }


  const exists = await this.findOne({email})

  if(exists){
    throw Error("Email already in use")
  }

  // salt (extra layer of security)
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({name, email, password: hash})

  return user
}

//static login method
userSchema.statics.login = async function (email, password){
  if (!email || !password){
    throw Error("All fields must be filled")
  }

  const user = await this.findOne({email})

  if(!user){
    throw Error("Incorrect email")
  }

  const match = await bcrypt.compare(password, user.password)

  if(!match){
    throw Error("Incorrect Password")
  }

  return user
}

const User = mongoose.model("User", userSchema)

module.exports = User