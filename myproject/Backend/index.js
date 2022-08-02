const express = require('express')
const {mongoUrl} = require('./keys')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('./Auth-Server/models/Users')
const authoRoutes = require('./routes/authRoutes')

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
 

// // Trying to send the req and get res 
// app.post('/', (req, res)=>{
//     console.log(req.body) 
//     res.send("Hello Dude")    
// }) 


// Assigning port to run

app.listen(PORT, ()=>{
    console.log("server running" + PORT)
})