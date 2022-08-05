const express = require('express')
const mongoose = require('mongoose')
const users = mongoose.model('Users')
const jwt = require('jsonwebtoken')
const { jwtkey } = require('../keys')
const router = express.Router()


router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = new users({ email, password })
        await user.save();
        // res.send("User Saved Successfully with the following details \n")
        const token = jwt.sign({ userId: user._id }, jwtkey)
        res.send({ token })
    } catch (error) {
        return res.status(442).send(error);
    }

})


router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    if(!email || !password){
        res.status(422).send("Must provide email or password 1")
    }
    const user = await users.findOne({email});
    if(!user)
    {res.status(422).send("Must provide email or password 2")}
    
    try{
        user = await users.comparePassword(password)
        const token = jwt.sign({ userId: user._id }, jwtkey)  
        res.send({ token })
    }catch(err){
        return res.status(422).send({error: "must provide email and password 3"})
    }
   
})















module.exports = router 
