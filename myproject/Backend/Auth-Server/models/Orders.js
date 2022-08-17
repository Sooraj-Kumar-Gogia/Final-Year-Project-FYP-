//Orders Schema 
const mongoose = require('mongoose')

const OrdersSchema = new mongoose.Schema({
    
    sellerid: {
        type: String,
        required: true
    },

    userid: {
        type: String,
        required: true
    },

    productid: {
        type: String,
        required: true
    },

    productname: {
        type: String,
        required: true
    },

    productprice: {
        type: Number,
        required: true
    },

    productimage: {
        type: String,
        required: true
    },

    productdescription: {
        type: String,
        required: true
    }, 
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }

})

mongoose.model('Orders', OrdersSchema);