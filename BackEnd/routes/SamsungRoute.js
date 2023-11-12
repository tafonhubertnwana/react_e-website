const express = require('express')
const router = express.Router()


//model imports
const SamsungProductModel = require('../models/SamsungProductModel')



//GET Apple Phone
router.get('/samsungphone', async (req, res) => {

  try {
      const samsungproduct = await SamsungProductModel.find()
      res.status(201).json(samsungproduct)
  } catch(error) {
    console.error({error: 'Could not Get Products'})
  }
})


//POST SamsungPhone
router.post('/samsungphone', async (req, res) => {
 
  try{
    const samsungproduct = await SamsungProductModel.create( req.body)
    res.status(200).json(samsungproduct)
  }catch(error){
    res.status(400).json({error: error.message})
  }
})



module.exports = router


