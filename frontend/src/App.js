import styled from "styled-components";
import { MainLayout } from "./styles/Layout";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import Item from "./components/Item/Item";
import React,{ useState } from 'react';
import Income from "./components/Income/Income";
import Expense from "./components/Expense/Expense";
import { useGlobalContext } from "./context/GlobalContext";

function App() {
    const loadBody = () => {

    }
    const [active, setActive] = React.useState(1)

    const global = useGlobalContext()
    console.log(global);
    const displayData = () =>{
        switch(active){
            case 1:
                return <Dashboard/> 
            case 2:
                return <Dashboard/>
            case 3:
                return <Income/>
            case 4:
                return <Expense/>
            default:
                return <Dashboard/> 

        }
    }

    return (
        <AppStyled className="App">
            <MainLayout>
                <Sidebar active = {active} setActive = {setActive} />
                <main>
                    {displayData()}
                    {/* <Dashboard />
                    <Item />
                    {loadBody()} */}
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
