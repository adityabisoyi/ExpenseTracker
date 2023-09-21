import React, { useEffect } from 'react'
import Item from '../Item/Item'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layout';
import { useGlobalContext } from '../../context/GlobalContext';
import IncomeForm from './IncomeForm';


function Income() {

    const {addIncome,income, getIncome, deleteIncome, totalIncome} = useGlobalContext()
    
    useEffect(() =>{
        getIncome()
    }, [])

    return (
        <IncomeStyled>
            <InnerLayout>
                <h1>Income</h1>
                <div className="income-content">
                    <div className="form-container">
                        {/* <IncomeForm></IncomeForm> */}
                    </div>
                    <div className="incomes">
                        {income.map((income) => {
                            const {_id, title, amount, date, category, description, type} = income;
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
                                deleteItem={deleteIncome}
                            />
                        })}
                    </div>
                </div>
            </InnerLayout>
        </IncomeStyled>
    )
}


const IncomeStyled = styled.div`

`;


export default Income
