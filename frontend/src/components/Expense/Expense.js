import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layout';


function Expense() {
    return (
        <ExpenseStyled>
            <InnerLayout>
            <h1>Expense</h1>
            </InnerLayout>
        </ExpenseStyled>
    )
}


const ExpenseStyled = styled.div`

`;

export default Expense