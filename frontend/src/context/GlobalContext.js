
import React, { useContext, useState } from 'react'
import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/v1/"

const GlobalContext = React.createContext()

const GlobalProvider = ({children}) => {
    const [income, setIncome] = useState([])
    const [expense, setExpense] = useState([])
    const [error, setError] = useState(null)

    const addIncome = async (income) => {
        const responses = await axios.post(`${BASE_URL}add-income`, income)
        .catch((err) => {
            setError(err.response.data.message)
        })
        getIncome()
    }

    const getIncome = async () => {
        const response = await axios.get(`${BASE_URL}get-income`)
        setIncome(response.data)
        // console.log(response.data)
    }

    const deleteIncome = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncome()
    }

    const totalIncome = () => {
        let totalIncome = 0;
        income.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }



    const addExpense = async (expense) => {
        const response = await axios.post(`${BASE_URL}add-expense`, expense)
            .catch((err) =>{
                setError(err.response.data.message)
            })
        getExpense()
    }

    const getExpense = async () => {
        const response = await axios.get(`${BASE_URL}get-expense`)
        setExpense(response.data)
        // console.log(response.data)
    }

    const deleteExpense = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-expense/${id}`)
        getExpense()
    }

    const totalExpense = () => {
        let totalExpense = 0;
        expense.forEach((expense) =>{
            totalExpense = totalExpense + expense.amount
        })

        return totalExpense;
    }

    const totalBalance = () => {
        return totalIncome() - totalExpense()
    }

    const history = [...income, ...expense]
    const transactionHistory = () => {
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 5)
    }

    const allTransactions = () => {
        // const history = [...income, ...expense]
        history.sort((b, a) => {
            return -1*(new Date(b.date) - new Date(a.date))
        })

        return history.reverse()
    }


    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncome,
            income,
            deleteIncome,
            expense,
            totalIncome,
            addExpense,
            getExpense,
            deleteExpense,
            totalExpense,
            totalBalance,
            transactionHistory,
            error,
            setError,
            allTransactions,
            history
        }}>
        {children}
        </GlobalContext.Provider>
    )
}


const useGlobalContext = () =>{
    return useContext(GlobalContext)

}

export { GlobalProvider, GlobalContext, useGlobalContext }
