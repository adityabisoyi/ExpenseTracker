import React from 'react'
import styled from 'styled-components'

function Sidebar() {
    return (
        <SidebarStyled>

        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`
    width: 350px;
    background: #151725;
    border-radius: 20px;
    background: linear-gradient(145deg, #131521, #161928);
    box-shadow: 20px 20px 60px #12141f,
                -20px -20px 60px #181a2b;
`

export default Sidebar
