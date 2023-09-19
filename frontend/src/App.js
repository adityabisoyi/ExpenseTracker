import styled from "styled-components";
import { MainLayout } from "./styles/Layout";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import Item from "./components/Item/Item";

function App() {
    const loadBody = () => {

    }

    return (
        <AppStyled className="App">
            <MainLayout>
                <Sidebar />
                <main>
                    <Dashboard />
                    <Item />
                    {/* {loadBody()} */}
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
