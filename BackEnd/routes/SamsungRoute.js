const express = require('express')
const router = express.Router()
const requireAuth = require('../middleware/requireauth')

//model imports
const SamsungProductModel = require('../models/SamsungProductModel')

//require auth for all route
router.use(requireAuth)

//GET Apple Phone
router.get('/samsungphone', async (req, res) => {

  try {
      user_id = req.user._id
      const samsungproduct = await SamsungProductModel.find({user_id})
      res.status(201).json(samsungproduct)
  } catch(error) {
    console.error({error: 'Could not Get Products'})
  }
})


//POST SamsungPhone
router.post('/samsungphone', async (req, res) => {
 
  try{
    const user_id = req.user._id
    const samsungproduct = await SamsungProductModel.create( req.body)
    res.status(200).json(samsungproduct)
  }catch(error){
    res.status(400).json({error: error.message})
  }
})



module.exports = router


