const express = require('express')
const mongoose = require('mongoose')
const users = mongoose.model('Users')
const jwt = require('jsonwebtoken')
const { jwtkey } = require('../keys')
const bcrypt = require('bcrypt')
const router = express.Router()
const products = mongoose.model('Products')
const orders = mongoose.model('Orders')
const uncomfirmedorders = mongoose.model('UncomfirmedOrders')
const complains = mongoose.model('Complains')
const rating = mongoose.model('Rating')

// Signup for New User
router.post('/signup', async (req, res) => {
    const { email, password, name, CNIC, BusinessName, role, phone, StoreDescription, CNICurl } = req.body;
    try {
        const user = new users({ email, password, name, CNIC, BusinessName, role, phone, StoreDescription, CNICurl })
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
        const ver_role = user.role;
        const userId = user._id;
        console.log(ver_role);
        bcrypt.compare(password, user.password, function (error, isMatch) {
            if (error) {
                throw error
            } else if (!isMatch) {
                res.send("Password doesn't match")
                console.log("Password doesn't match!")
            } else {
                console.log("Password matches!")
                const token = jwt.sign({ userId: user._id }, jwtkey)
                console.log("Token", { token })
                res.send(user)
                // const user = user.r
                // res.send()
            }
        })
    }

})



// // Signin for Existing Seller
// router.post('/sellerlogin', async (req, res) => {
//     const { email, password, role } = req.body;
//     if (!email || !password ) { res.status(422).send("Must provide required credentials") }

//     const user = await users.findOne({ email });    
//     const ver_role = users.find({role})
//     if (!user) { res.status(422).send("User doesn't exist") }
//     else {
//         bcrypt.compare(password, user.password, function (error, isMatch) {
//             if (error) {
//                 throw error
//             } else if (!isMatch) {
//                 res.send("Password doesn't match")
//                 console.log("Password doesn't match!")
//             } else {
//                 console.log(role)
//                 console.log("Password matches!")
//                 const token = jwt.sign({ userId: user._id }, jwtkey)
//                 res.send({ token })
//             }
//         })
//     }

// })










//Adding Products to the Database

//Add Products to the Database
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



//Placing Temporary unComfirmed Orders
router.post('/uncomfirmedorders', async (req, res) => {
    const { userid, sellerid, productid, name, quantity, price, city, phone, address, image } = req.body;
    try {
        const uncomfirmedorder = new uncomfirmedorders({ userid, sellerid, productid, name, quantity, price, city, phone, address, image })
        await uncomfirmedorder.save();
        res.send(uncomfirmedorder)
    } catch (error) {
        return res.status(442).send(error);
        console.log("Could not save uncomfirmed order");
    }
}),


    //move and delete orders 
    // router.post('/confirmanddeleteorder', async (req, res) => {
    //     const id  = req.body.id;
    //     console.log(id)
    //     console.log(id)
    //     try {
    //         console.log("In the try method of API: ", id);
    //         const confirmed = await uncomfirmedorders.findById(mongoose.Types.ObjectId(id));
    //         const sellerid = confirmed.sellerid
    //         const userid = confirmed.userid
    //         const productid = confirmed.productid
    //         const name = confirmed.name
    //         const price = confirmed.price
    //         const description = confirmed.description
    //         const image = confirmed.image
    //         const address = confirmed.address
    //         const city = confirmed.city
    //         const phone = confirmed.phone
    //         const quantity = confirmed.quantity
    //         const total = confirmed.total
    //         const order = new orders({ sellerid, userid, productid, name, price, description, image, address, city, phone, quantity, total })
    //         await order.save();
    //         await uncomfirmedorders.findByIdAndDelete(id)
    //         res.send(confirmed)
    //     } catch (error) {
    //         return res.status(442).send(error);
    //         console.log("Could not delete order");
    //     }
    // }),

    // Fetch Uncomfirmed Orders w.r.t OrderID
    router.get('/bringuncomfirmedorder/:id', async (req, res) => {
        try {
            console.log("Fetching order from unconfirmed orders, ID: ", req.params.id)
            const fetchedorder = await uncomfirmedorders.find(mongoose.Types.ObjectId(req.params.id));
            res.send(fetchedorder)
        } catch (error) {
            return res.status(442).send(error);
            console.log("Could not delete order");
        }
    }),

    // Post Unconfirmed Order to Confirmed Order
    router.post('/moveorderdata', async (req, res) => {
        const { sellerid, userid, productid, name, price, address, city, phone, quantity } = req.body;
        console.log("Move Order Backend, Seller: ", sellerid)
        try {
            const order = new orders({ sellerid, userid, productid, name, price, address, city, phone, quantity })
            await order.save();
            res.send(order)
        } catch (error) {
            return res.status(442).send(error);
            console.log("Could not delete order");
        }
    }),

    // Delete Unconfirmed Order
    // router.delete('/deleteuncomfirmedorder/:id', async (req, res) => {
    //     const id  = req.body.id;
    //     console.log("Finally deleting the unconfirmed order, ID: ", id)
    //     try {
    //         await uncomfirmedorders.findByIdAndDelete(mongoose.Types.ObjectId(req.params.id))
    //         res.send("Deleted")
    //     } catch (error) {
    //         return res.status(442).send(error);
    //         console.log("Could not delete order");
    //     }
    // }),




    //deleting unconfirmed orders || Reject Orders API
    router.delete('/deleteuncomfirmedorder/:id', async (req, res) => {
        console.log("reject with order id ", req.params.id)
        await uncomfirmedorders.findByIdAndDelete(mongoose.Types.ObjectId(req.params.id))
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    }),
 

    router.delete('/completeorder/:id', async (req, res) => {
        console.log("complete with order id ", req.params.id)
        await orders.findByIdAndDelete(mongoose.Types.ObjectId(req.params.id))
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    }),


    //for fetching unconfiremd order by seller id
    router.get('/fetchunconfirmedorderslist/:id', async (req, res) => {
        console.log(req.params.id)
        await uncomfirmedorders.find({ sellerid: req.params.id })
            .then(data => {
                res.send(data)
            })

            .catch(err => {
                res.send(err)
            })

    })

router.get('/fetchunconfirmedorders/:id', async (req, res) => {
    console.log(req.params.id)
    await uncomfirmedorders.findById(req.params.id)
        .then(data => {
            res.send(data)
        })

        .catch(err => {
            res.send(err)
        })

})


//count unconmirmed orders
router.get('/countuncomfirmedorders/:id', async (req, res) => {
    console.log(req.params.id)
    try {
        const orderid = req.params.id;
        await uncomfirmedorders.find({ sellerid: id })
        res.send(uncomfirmedorders)
    } catch (error) {
        return res.status(442).send(error);
        console.log("Could not delete order");
    }
}),


    //for fetching orders by user id
    router.get('/fetchordersbyuserid/:id', async (req, res) => {
        console.log(req.params.id)
        await orders.find({ userid: req.params.id })
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    }),


    //for fetching orders by orderid to complete orders
    router.get('/fetchordersbyorderidtocompleteorder/:id', async (req, res) => {
        console.log(req.params.id)
        await orders.findById(req.params.id)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    }),




    //Submit Complains 
    router.post('/submitcomplain', async (req, res) => {
        const { sellerid, userid, complain, complainby } = req.body;
        try {
            const filecomplain = new complains({ sellerid, userid, complain, complainby })
            await filecomplain.save();
            res.send(filecomplain)
        } catch (error) {
            return res.status(442).send(error);
            console.log("Could not save product");
        }
    }),



    //Order Products
    router.post('/orderproducts', async (req, res) => {
        const { sellerid, userid, productid, name, price, description, image, address, city, phone, quantity } = req.body;
        try {
            const order = new orders({ sellerid, userid, productid, name, price, description, image, address, city, phone })
            await order.save();
            res.send(order)
        } catch (error) {
            return res.status(442).send(error);
            console.log("Could not save product");
        }

    })




//order placing
router.post('/orderproducts', async (req, res) => {
    const { sellerid, userid, productid, name, price, description, image, address, city, phone, quantity } = req.body;
    try {
        const order = new orders({ sellerid, userid, productid, name, price, description, image, address, city, phone })
        await order.save();
        res.send(order)
    } catch (error) {
        return res.status(442).send(error);
        console.log("Could not save product");
    }

})



//for fetching orders by sellers id
router.get('/fetchorders/:id', async (req, res) => {
    console.log(req.params.id)
    await orders.find({ sellerid: req.params.id })
        .then(data => {
            res.send(data)
        })

        .catch(err => {
            res.send(err)
        })

})




//Getting Products from the Database
router.get('/getproducts', async (req, res) => {
    try {
        const product = await products.aggregate([{ $sample: { size: 8 } }]) //find();
        res.send(product)
    } catch (error) {
        return res.status(442).send(error);
        console.log("Could not get product");
    }

})

//Getting Products from the Database w.r.t Seller ID
router.get('/getproductsforstore/:id', async (req, res) => {
    try {
        const product = await products.find({ sellerid: req.params.id })
        res.send(product)
    } catch (error) {
        return res.status(442).send(error);
        console.log("Could not get product");
    }

}),


//Deleting Products from the Database
router.delete('/deleteproduct/:id', async (req, res) => {
    try {
        await products.findByIdAndDelete(req.params.id)
        res.send(productid)
    } catch (error) {
        return res.status(442).send(error);
        console.log("Could not delete product");
    }
}),


//Fetch user by id
router.get('/fetchuser/:id', async (req, res) => {
    try {
        const user = await users.findById(mongoose.Types.ObjectId(req.params.id)) //find();
        res.send(user)
    } catch (error) {
        return res.status(442).send(error);
        console.log("Could not get product");
    }
}),




    //call a product with product ID
    router.get('/fetchtproduct/:id', async (req, res) => {
        try {
            const product = await products.findById(mongoose.Types.ObjectId(req.params.id)) //find(); 
            res.send(product)
        } catch (error) {
            return res.status(442).send(error);
            console.log("Could not get product");
        }
    }),


//for submiting the rating
router.post('/submitrating', async (req, res) => {
    const { sellerid, userid, productid, rated, comment } = req.body;
    try {
        const rate = new rating({ sellerid, userid, productid, rated, comment })
        await rate.save();
        res.send(rate)
    } catch (error) {
        return res.status(442).send(error);
        console.log("Could not rate product");
    }
}), 



//for fetching the rating
router.get('/fetchrating/:id', async (req, res) => {
    try {
        const rate = await rating.find({ sellerid: req.params.id })
        res.send(rate)
    } catch (error) {
        return res.status(442).send(error);
        console.log("Could not get rating");
    }
}),

//for fetching the rating
router.get('/fetchratingbyproductid/:id', async (req, res) => {
    try {
        const rate = await rating.find({ productid: req.params.id })
        res.send(rate)
    } catch (error) {
        return res.status(442).send(error);
        console.log("Could not get rating");
    }
}),



router.get('/fetchunconfirmedorderslistforuser/:id', async (req, res) => {
    console.log(req.params.id)
    await uncomfirmedorders.find({ userid: req.params.id })
        .then(data => {
            res.send(data)
        })

        .catch(err => {
            res.send(err)
        })

})








module.exports = router
