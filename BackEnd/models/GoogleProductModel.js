const mongoose = require('mongoose')

const Schema = mongoose.Schema

const googleProductSchema = new Schema({
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

const GoogleProductModel = mongoose.model('google_product' , googleProductSchema)

module.exports = GoogleProductModel
