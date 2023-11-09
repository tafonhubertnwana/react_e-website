const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

// express app
const app = express()
const productRoute = require('./routes/workout')
const googleRoute = require("./routes/googleRoute")
const samsungRoute = require("./routes/SamsungRoute")
const vivoRoute = require('./routes/vivoRoute')

//user Route
const userRoute = require('./routes/user')



// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method); next()
})

//routes
app.use('/products', productRoute)
app.use('/googleproduct', googleRoute)
app.use('/samsungproduct', samsungRoute)
app.use('/vivoproduct', vivoRoute)
app.use("/user", userRoute)

//connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connecting to db and listening on port", process.env.PORT)
    })
  })

  .catch((error) => {
    console.log(error)
  })



