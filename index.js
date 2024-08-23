require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/router')
require('./db/connection')

const cmServer = express()

cmServer.use(cors())
cmServer.use(express.json())
cmServer.use(router)

const PORT = process.env.PORT || 3000  

cmServer.listen(PORT,() => {
    console.log(`CastME Server Started at port : ${PORT}`);
})

cmServer.get('/',(req,res) => {
  res.status(200).send(`<h1 style='color:red'> CastME Server started, and waiting for client request!!  </h1>`)
})

