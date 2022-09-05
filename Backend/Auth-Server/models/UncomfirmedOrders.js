//unComfirmed Orders Schema 
const mongoose = require('mongoose')

const UncomfirmedOrdersSchema = new mongoose.Schema({
    
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
    },
    quantity: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
    }

})

mongoose.model('UncomfirmedOrders', UncomfirmedOrdersSchema);