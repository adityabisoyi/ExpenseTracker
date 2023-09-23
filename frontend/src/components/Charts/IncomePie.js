import React from 'react'
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
import styled from 'styled-components'
import { useGlobalContext } from '../../context/GlobalContext'
import {Pie} from 'react-chartjs-2'


ChartJs.register(CategoryScale)

function IncomePie() {
    const {income, expense} = useGlobalContext();

    const data = {
        labels: income.map((inc) => {
            const {cats} = inc.category
            return cats
        }),
        
    }
    return (
        <div>IncomePie</div>
    )
}

export default IncomePie