const mongoose = require('mongoose')

const tranactionSchema = new mongoose.Schema({
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null

    },
    to: {
         type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null
    },
    amount:{
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum: ["ADD", "SEND"],
        required: true
    }
}, {timestamp: true})

module.exports = mongoose.model("Transaction", transactionSchema)

//this is mine