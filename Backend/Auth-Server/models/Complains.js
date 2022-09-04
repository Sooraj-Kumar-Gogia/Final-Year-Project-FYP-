const mongoose = require('mongoose')


const ComplainsSchema = new mongoose.Schema({

    sellerid: {
        type: String,
        required: true
    },
    userid: {
        type: String,
        required: true 
    },
    complain: {
        type: String,
        required: true
    },
    complainby: {
        type: String,
        required: true
    }
})



mongoose.model('Complains', ComplainsSchema);