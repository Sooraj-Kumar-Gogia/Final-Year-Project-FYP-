const mongoose = require('mongoose')


const RatingSchema = new mongoose.Schema({

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
    rated: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
    }
})



mongoose.model('Rating', RatingSchema);