const express = require('express')
const {mongoUrl} = require('./keys')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('./Auth-Server/models/Users')
require('./Auth-Server/models/Products')
require('./Auth-Server/models/Orders')
const authoRoutes = require('./routes/authRoutes')
const requireToken = require("./middleware/requireToken")


const app = express()
PORT = 3000

app.use(bodyParser.json())
app.use(authoRoutes)


// Connection to the MongoDB 
mongoose.connect(mongoUrl)    
mongoose.connection.on('connected' , ()=>{
    console.log('Yeaahh!! Connected to MongoDB')
})
mongoose.connection.on('eror' , (err)=>{
    console.log('Opps! Could not connect', err)
})
 

// Trying to send the req and get res 
app.get('/', requireToken, (req, res)=>{
   res.send("Your Email is: " + req.user.email)
}) 


// Assigning port to run

app.listen(PORT, ()=>{
    console.log("server running" + PORT)
})