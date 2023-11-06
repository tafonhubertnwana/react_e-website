const mongoose = require('mongoose')

const Schema = mongoose.Schema

const vivoProductSchema = new Schema({
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

const VivoProductModel = mongoose.model('vivo_product', vivoProductSchema)

module.exports = VivoProductModel