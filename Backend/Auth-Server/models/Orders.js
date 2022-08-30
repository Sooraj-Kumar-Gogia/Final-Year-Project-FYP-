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

    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    image: {
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