const express = require('express')
const mongoose = require('mongoose')
const users = mongoose.model('Users')
const jwt = require('jsonwebtoken')
const { jwtkey } = require('../keys')
const bcrypt = require('bcrypt')
const router = express.Router()
const {hash} = require('../Auth-Server/models/Users')


// UserSchema.methods.comparePassword = function (candidatePassword) {
//     const user = this;
//     return new Promise((resolve, reject) => {
//         bcrypt.compare(this.comparePassword, user.password, (err, isMatch) => {
//             if (err) {
//                 res.send("first if te ahyan")
//                 return reject(err)
//             }
//             if (!isMatch) {
//                 res.send("second if te ahyan")
//                 return reject(err)
//             }
//             resolve(true)
//         })
//     })
// }


router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = new users({ email, password })
        await user.save();
        const token = jwt.sign({ userId: user._id }, jwtkey)
        res.send("User saved with token: "+{ token })
    } catch (error) {
        return res.status(442).send(error);
    }

})



router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(422).send("Must provide email or password 1")
    }
    const user = await users.findOne({ email });
    if (!user) { res.status(422).send("User doesn't exist") }
    else {
        bcrypt.compare(password, user.password, function (error, isMatch) {
            if (error) {
                throw error
            } else if (!isMatch) {
                res.send("Password doesn't match")
                console.log("Password doesn't match!")
            } else {
                console.log("Password matches!")
                const token = jwt.sign({ userId: user._id }, jwtkey)
                res.send({ token })
            }
        })
    }

})














router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(422).send("Must provide email or password 1")
    }
    const user = await users.findOne({ email });
    if (!user) { res.status(422).send("Must provide email or password 2") }

    user = await users.comparePassword(user.password)
    const token = jwt.sign({ userId: user._id }, jwtkey)
    res.send({ token })

    // try{
    //     user = await users.comparePassword(password)
    //     const token = jwt.sign({ userId: user._id }, jwtkey)  
    //     res.send({ token })
    // }catch(err){
    //     return res.status(422).send({error: "must provide email and password 3"})
    // }

})


module.exports = router 
