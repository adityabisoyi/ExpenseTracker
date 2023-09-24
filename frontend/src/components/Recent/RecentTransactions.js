import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context/GlobalContext'
import styled from 'styled-components'
import { dateFormat } from '../../utils/dateFormat'

function RecentTransactions() {
    const {allTransactions, getExpense, getIncome } = useGlobalContext()

    useEffect(() =>{
        getExpense()
        getIncome()
    }, [])
    const [...history] = allTransactions()

    return (
        <HistoryStyled>
            <h2>Recent History</h2>
            {history.map((item) =>{
                const {_id, title, date, amount, type} = item
                return (
                    <div key={_id} className="history-item">
                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {title}
                        </p>
                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {dateFormat(date)}
                        </p>

                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {
                                type === 'expense' ? `- ₹ ${amount <= 0 ? 0 : Intl.NumberFormat('en-IN').format(amount.toFixed(2))}` : `+ ₹ ${amount <= 0 ? 0: Intl.NumberFormat('en-IN').format(amount.toFixed(2))}`
                            }
                        </p>
                    </div>
                )
            })}
        </HistoryStyled>
    )
}

const HistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .history-item{
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export default RecentTransactions