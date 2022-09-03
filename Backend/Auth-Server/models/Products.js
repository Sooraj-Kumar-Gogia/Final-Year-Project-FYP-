const mongoose = require('mongoose')


const ProductsSchema = new mongoose.Schema({

    sellerid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true 
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})



mongoose.model('Products', ProductsSchema);