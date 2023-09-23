import React, { useContext, useState } from 'react';
import styled from "styled-components";
import { MainLayout } from "./styles/Layout";
import Sidebar from './components/Sidebar/Sidebar'
import Dashboard from './components/Dashboard/Dashboard';
import Income from './components/Income/Income'
import Expenses from './components/Expense/Expense';
import { GlobalContext } from './context/GlobalContext';
import RecentTransactions from './components/Recent/RecentTransactions';

function App() {

    const [active, setActive] = useState(1)

    const global = useContext(GlobalContext);
    
    const loadBody = () => {
        switch(active){
            case 1:
              return <Dashboard />
            case 2:
              return <RecentTransactions />
            case 3:
              return <Income />
            case 4: 
              return <Expenses />
            default: 
              return <Dashboard />
          }
    }

    return (
        <AppStyled className="App">
            <MainLayout>
                <Sidebar active={active} setActive={setActive} />
                <main>
                    {loadBody()}
                </main>
            </MainLayout>
        </AppStyled>
    );
}

const AppStyled = styled.div`
    height: 100vh;
    background-image: url(${props => props.bg});
    position: relative;
    main{
        flex: 1;
        background: rgba(252, 246, 249, 0.78);
        border: 3px solid #FFFFFF;
        backdrop-filter: blur(4.5px);
        border-radius: 32px;
        overflow-x: hidden;
        padding: 1em;
        &::-webkit-scrollbar{
            width: 0;
        }
    }
`

export default App;
