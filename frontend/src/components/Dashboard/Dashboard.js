import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layout';
import DashboardChart from '../Charts/DashboardChart'
import { rupee } from '../../utils/icons';
import { useGlobalContext } from '../../context/GlobalContext';
import History from './History';

function Dashboard() {
    
    const {totalExpense, totalIncome, totalBalance, getIncome, getExpense } = useGlobalContext()

    useEffect(() => {
        getIncome()
        getExpense()
    }, [])

    return (
        <DashboardStyled>
            <InnerLayout>
                {/* <h1>All Transactions</h1> */}
                <div className="stats-con">
                    <div className="chart-con">
                        <DashboardChart />
                        <div className="amount-con">
                            <div className="income">
                                <h2>Total Income</h2>
                                <p>
                                    {rupee} {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Total Expense</h2>
                                <p>
                                    {rupee} {totalExpense()}
                                </p>
                            </div>
                            <div className="balance">
                                <h2>Total Balance</h2>
                                <p>
                                    {rupee} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="history-con">
                        <History/>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}


const DashboardStyled = styled.div`
    .stats-con{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        .chart-con{
            grid-column: 1 / 4;
            height: 300px;
            .amount-con{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 2rem;
                text-align: center;
                .income, .expense{
                    grid-column: span 2;
                }
                .income, .expense, .balance{
                    background: #FCF6F9;
                    border: 2px solid #FFFFFF;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: 0.5em;
                    p{
                        font-size: 1.5rem;
                        font-weight: 700;
                    }
                }
                .income {
                    color: var(--color-green);
                }
                .expense {
                    color: red;
                }

                .balance{
                    grid-column: 2 / 4;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    p{
                        color: blue;
                        opacity: 0.6;
                        font-size: 1.5rem;
                    }
                }
            }
        }


        .history-con {
            grid-column: 4/-1;
            font-weight: bold;
        }

    }
`;

export default Dashboard
