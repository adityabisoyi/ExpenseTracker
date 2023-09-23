import React, { useEffect } from 'react'
import {Chart as ChartJs, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'
import {Line} from 'react-chartjs-2'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/GlobalContext'
import { dateFormat } from '../../utils/dateFormat'
import moment from 'moment'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

function Chart() {
    const {income, expense, getExpense, getIncome, history, allTransactions} = useGlobalContext()

    useEffect(() =>{
        getExpense()
        getIncome()
    }, [])

    const data = {
        labels: allTransactions().map((inc) =>{
            const {date} = inc
            return moment(date).format('MMM Do')
        }),
        datasets: [
            {
                label: 'Income',
                data: [
                    ...income.map((income) => {
                        const {amount} = income
                        return amount
                    })
                ],
                backgroundColor: 'green',
                tension: 0
            },
            {
                label: 'Expenses',
                data: [
                    ...expense.map((expense) => {
                        const {amount} = expense
                        return amount
                    })
                ],
                backgroundColor: 'red',
                tension: 0
            }
        ]
    }


    return (
        <ChartStyled >
            <Line data={data} />
        </ChartStyled>
    )
}

const ChartStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
`;

export default Chart