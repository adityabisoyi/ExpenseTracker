const mongoose = require('mongoose');

const IncomeSchema = new mongoose.Schema({
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
        default: "income"
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
}, {timestamps: true})

const Income = mongoose.model('Income', IncomeSchema);

module.exports = Income;