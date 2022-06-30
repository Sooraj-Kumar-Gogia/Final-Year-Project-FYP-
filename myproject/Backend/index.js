const express = require('express')
const {mongoUrl} = require('./keys')
const mongoose = require('mongoose')
const app = express()
PORT = 3000

mongoose.connect(mongoUrl)

mongoose.connection.on('connected' , ()=>{
    console.log('Yeaahh!! Connected to MongoDB')
})

mongoose.connection.on('eror' , (err)=>{
    console.log('Opps! Could not connect', err)
})



app.get('/', (req, res)=>{
    res.send("Hello")
})

app.listen(PORT, ()=>{
    console.log("server running" + PORT)
})
