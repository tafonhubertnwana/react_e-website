const mongoose = require('mongoose')

const Schema = mongoose.Schema

const samsungProductSchema = new Schema({
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

const SamsungProductModel = mongoose.model('samsung_product' , samsungProductSchema)

module.exports = SamsungProductModel
