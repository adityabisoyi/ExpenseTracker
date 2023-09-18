const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
        trim: true,
    },
    amount : {
        type: Number,
        required: true,
        trim: true,
    },
    type: {
        type: String,
        default: "expense"
    },
    category : {
        type: String,
        required: true,
        trim: true,
    },
    date : {
        type: Date,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: false,
        trim: true
    }
})

module.exports = mongoose.model('Expense', ExpenseSchema)

//copy pasted from income edit accordingly