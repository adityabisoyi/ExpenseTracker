import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layout';

function Dashboard() {
    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>Dashboard</h1>
            </InnerLayout>
        </DashboardStyled>
    )
}


const DashboardStyled = styled.div`

`;

export default Dashboard
