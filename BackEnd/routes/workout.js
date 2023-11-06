const express = require('express')
const router = express.Router()

//model imports
const AppleProductModel = require('../models/AppleProductModel')

//GET Apple Phone
router.get('/applephone', async (req, res) => {

  try {
      const product = await AppleProductModel.find()
      res.status(201).json(product)
  } catch(error) {
    console.error({error: 'Could not Get Products'})
  }
})

//GET a single workout
router.get('/:id', (req, res) => {
  res  .json({mssg: "Get a single workout"})
})

//POST Apple Phone
router.post('/applephone', async (req, res) => {
 
  try{
    const product = await AppleProductModel.create( req.body)
    res.status(200).json(product)
  }catch(error){
    res.status(400).json({error: error.message})
  }
})

//DELETE  a workout
router.delete('/applephone/:id', async (req, res) => {

  try{
    const applephoneId = req.params.id;
    const product = await AppleProductModel.deleteOne({  _id: applephoneId})
    res.status(200).json(product)
  
  }catch(error){
    res.status(400).json({error: error.message})
  }
})

//UPDATE  a workout
router.patch('/:id', (req, res) => {
  res.json({mssg: 'UPDATE a workout'})
})




module.exports = router


