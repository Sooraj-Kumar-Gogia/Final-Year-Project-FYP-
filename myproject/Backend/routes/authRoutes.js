const express = require('express')
const mongoose = require('mongoose')
const  users = mongoose.model('Users')
const jwt = require('jsonwebtoken')
const { jwtkey } = require('../keys')
const router = express.Router()

 
router.post('/Users', async (req,res)=>{
    const {email, password} = req.body;
    try {
        const user = new users({email, password})
        await user.save();
        // res.send("User Saved Successfully with the following details \n")
        const token = jwt.sign({userId: user._id}, jwtkey)
        res.send({token})
    } catch (error) {
        return res.status(442).send(error);
    }
    
     
})

module.exports = router 
