import styled from "styled-components";
import { MainLayout } from "./styles/Layout";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
    const loadBody = () => {

    }

    return (
        <AppStyled className="App">
            <MainLayout>
                <Sidebar/>
                <main>
                    <Dashboard/>
                    {/* {loadBody()} */}
                </main>
            </MainLayout>
        </AppStyled>
    );
}

const AppStyled = styled.div`
    height: 100vh;
    background-color: #1C1E2D;
    position: relative;

    main {
        flex: 1;
        background: #151725;
        border-radius: 20px;
        padding: 1em;
        background: linear-gradient(145deg, #131521, #161928);
        box-shadow: 20px 20px 60px #12141f,
                    -20px -20px 60px #181a2b;
    }
`

export default App;
