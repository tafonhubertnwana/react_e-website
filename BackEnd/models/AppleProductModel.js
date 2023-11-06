const mongoose = require('mongoose')

const Schema = mongoose.Schema

const appleProductSchema = new Schema({
  imageurl: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
})

const AppleProductModel = mongoose.model('apple_product' , appleProductSchema)

module.exports = AppleProductModel
