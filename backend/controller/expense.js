const Expense = require("../models/ExpenseModel")



const addExpense = async (req, res) => {
    const {title, amount, date, category, description} = req.body
    const expense = new Expense({
        title, amount, date, category, description
    })

    try {
        if(!title || !category || !date) {
            return res.status(400).json({message: 'All fields are required'})
        }
        if(amount < 0 || !amount === 'number') {
            return res.status(400).json({message: "Amount should be a number and greater than zero"})
        }

        await expense.save()
        res.status(200).json({message: "Expense saved"})
    } catch(error) {
        console.log(error);
        res.status(500).json({message: "Server error"})
    }
}

const getExpense = async (req, res) => {
    try {
        const expenses = await Expense.find().sort({createdAt: -1})
        res.status(200).json(expenses)
    } catch (error) {
        res.status(500).json({message: "Server error"})
    }
}

const deleteExpense = async (req, res) => {
    const {id} = req.params;
    Expense.findByIdAndDelete(id)
        .then((income) =>{
            res.status(200).json({message: 'Expense Deleted'})
        })
        .catch((err) =>{
            res.status(500).json({message: 'Server Error'})
        })
}


module.exports = {addExpense, getExpense, deleteExpense}