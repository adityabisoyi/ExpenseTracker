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
                <div className="income-content">
                    <div className="form-container">
                        <IncomeForm />
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
    display: flex;
    overflow: auto;
    font-size: 0.8em;
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
`;


export default Income
