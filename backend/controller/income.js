const Income = require("../models/IncomeModel")



const addIncome = async (req, res) => {
    const {title, amount, date, category, description} = req.body
    const income = new Income({
        title, amount, date, category, description
    })

    try {
        if(!title || !category || !date) {
            return res.status(400).json({message: 'All fields are required'})
        }
        if(amount < 0 || !amount === 'number') {
            return res.status(400).json({message: "Amount should be a number and greater than zero"})
        }

        await income.save()
        res.status(200).json({message: "Income saved"})
    } catch(error) {
        console.log(error);
        res.status(500).json({message: "Server error"})
    }
}

const getIncome = async (req, res) => {
    try {
        const incomes = await Income.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: "Server error"})
    }
}

const deleteIncome = async (req, res) => {
    const {id} = req.params;
    Income.findByIdAndDelete(id)
        .then((income) =>{
            res.status(200).json({message: 'Income Deleted'})
        })
        .catch((err) =>{
            res.status(500).json({message: 'Server Error'})
        })
}


module.exports = {addIncome, getIncome, deleteIncome}