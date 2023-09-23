import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layout';
import DashboardChart from '../Charts/DashboardChart'

function Dashboard() {
    
    

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>Dashboard</h1>
                <DashboardChart/>
            </InnerLayout>
        </DashboardStyled>
    )
}


const DashboardStyled = styled.div`

`;

export default Dashboard
