const express = require('express')
const router = express.Router()

//model imports
const VivoProductModel = require('../models/VivoProductModel')

//GET Apple Phone
router.get('/vivophone', async (req, res) => {

  try {
      const vivoproduct = await VivoProductModel.find()
      res.status(201).json(vivoproduct)
  } catch(error) {
    console.error({error: 'Could not Get Products' })
  }
})



//POST VivoPhone
router.post('/vivophone', async (req, res) => {
 
  try{
    const vivoproduct = await VivoProductModel.create( req.body)
    res.status(200).json(vivoproduct)
  }catch(error){
    res.status(400).json({error: error.message})
  }
})


module.exports = router
