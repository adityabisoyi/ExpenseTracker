import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layout';
import ExpenseForm from './ExpenseForm';
import { useGlobalContext } from '../../context/GlobalContext';
import Item from '../Item/Item';


function Expense() {
    const {expense, getExpense, deleteExpense, totalExpense} = useGlobalContext()

    useEffect(() =>{
        getExpense()
    }, [])

    return (
        <ExpenseStyled>
            <InnerLayout>
                <h1>Expense</h1>

                {/* <ExpenseForm/> */}
                <div className="incomes">
                    {expense.map((expense) => {
                        const {_id, title, amount, date, category, description, type} = expense;
                        
                        console.log(expense)
                        return <Item
                            key={_id}
                            id={_id} 
                            title={title} 
                            description={description} 
                            amount={amount} 
                            date={date} 
                            type={type}
                            category={category} 
                            indicatorColor="var(--color-green)"
                            deleteItem={deleteExpense}
                        />
                    })}
                </div>
            </InnerLayout>
        </ExpenseStyled>
    )
}


const ExpenseStyled = styled.div`
    display: flex;
    overflow: auto;
    .total-income{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span{
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }
    .income-content{
        display: flex;
        gap: 2rem;
        .incomes{
            flex: 1;
        }
    }
`

export default Expense