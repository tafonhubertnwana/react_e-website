const express = require('express')
const router = express.Router()
const requireAuth = require('../middleware/requireauth')




//model imports
const GoogleProductModel = require('../models/GoogleProductModel')

//require auth for all route
router.use(requireAuth)
//GET Apple Phone
router.get('/googlephone', async (req, res) => {

  try {
      const googleproduct = await GoogleProductModel.find()
      res.status(201).json(googleproduct)
  } catch(error) {
    console.error({error: 'Could not Get Products' })
  }
});

//POST Apple Phone
router.post('/googlephone', async (req, res) => {
 
  try{
    const googleproduct = await GoogleProductModel.create( req.body)
    res.status(200).json(googleproduct)
  }catch(error){
    res.status(400).json({error: error.message})
  }
})


module.exports = router


