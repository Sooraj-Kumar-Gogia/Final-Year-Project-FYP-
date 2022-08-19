const express = require('express')
const mongoose = require('mongoose')
const users = mongoose.model('Users')
const jwt = require('jsonwebtoken')
const { jwtkey } = require('../keys')
const bcrypt = require('bcrypt')
const router = express.Router()
const products = mongoose.model('Products')


// Signup for New User
router.post('/signup', async (req, res) => {
    const { email, password, name, address, city, role, phone, about } = req.body;
    try {
        const user = new users({ email, password, name, address, city, role, phone, about })
        await user.save();
        const token = jwt.sign({ userId: user._id }, jwtkey)
        res.send({ token })
    } catch (error) {
        return res.status(442).send(error);
        console.log("Could not save user");
    }

})




// Signin for Existing User
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




//Adding Products to the Database
router.post('/addproducts', async (req, res) => {
    const { sellerid, name, price, description, image } = req.body;
    try {
        const product = new products({ sellerid, name, price, description, image })
        await product.save();
        res.send(product)
    } catch (error) {
        return res.status(442).send(error);
        console.log("Could not save product");
    }

})


//Getting Products from the Database
router.get('/getproducts', async (req, res) => {
    try {
        const product = await products.aggregate([ { $sample: { size: 5 } } ]) //find();
        res.send(product)
    } catch (error) {
        return res.status(442).send(error);
        console.log("Could not get product");
    }

})

// //Deleting Products from the Database
// router.delete('/deleteproducts/:id', async (req, res) => {
//     try {
//         const product = await products.findByIdAndDelete(req.params.id);
//         res.send(product)
//     } catch (error) {
//         return res.status(442).send(error);
//         console.log("Could not delete product");
//     }

// })

//Updating Products in the Database
// router.put('/updateproducts/:id', async (req, res) => {
//     try {
//         const product = await products.findByIdAndUpdate(req.params.id, req.body);
//         res.send(product)
//     } catch (error) {
//         return res.status(442).send(error);
//         console.log("Could not update product");
//     }

// })


//ordering Products from the Database
// router.get('/orderproducts', async (req, res) => {
//     try {
//         const product = await products.find().sort({ price: 1 });
//         res.send(product)
//     } catch (error) {
//         return res.status(442).send(error);
//         console.log("Could not order product");
//     }

// })






module.exports = router