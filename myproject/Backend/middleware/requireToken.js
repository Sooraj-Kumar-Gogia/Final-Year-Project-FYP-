const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = mongoose.model('Users')
const {jwtkey} = require('../keys')



module.exports = (req, res, next)=>{
    const { authorization } = req.headers;

    //checking if user is authorized
    //and authorizatoin = "Bearer asdfasldkjroifdj"
    if(!authorization){
        return res.status(401).send("Error: You must be Logged in")
    }
    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, jwtkey, async (err, payload)=>{
        if(err){
            return res.status(401).send("You must be logged in") // authorization
            // let's see
            
    }
    const {userId} = payload;
    const user = await User.findById(userId)
    req.user = user;
    next();
    })


}