const express = require('express')
const mongoose = require('mongoose')
const  users = mongoose.model('Users')
const router = express.Router()

 
router.post('/Users', (req,res)=>{
    const {email, password} = req.body;
    const user = new users({email, password})
    user.save()
    // .then(() => res.json('User added!'))
    // .catch(err => res.status(400).json('Error: ' + err));
    res.send(user)
s
     
})

module.exports = router 
