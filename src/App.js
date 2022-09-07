import {AppContainer, AppWrap} from "./styledComponent/layout";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link, NavLink
} from "react-router-dom";
import Example1 from "./example1";
import Example2 from "./example2";
import {NavContainer, NavList, NavItem} from "./styledComponent/nav";
import Example0 from "./example0";

function App() {


    return (
        <>
            <Router>
                <AppContainer>
                    <NavContainer>
                        <NavList>
                            <NavItem>
                                <NavLink to="/example0">DataStructure</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/example1">解構賦值</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/example2">展開 & 其餘參數</NavLink>
                            </NavItem>
                        </NavList>
                    </NavContainer>
                    <AppWrap>
                        <Routes>
                            <Route path="/example0" element={<Example0 />} />
                            <Route path="/example1" element={<Example1 />} />
                            <Route path="/example2" element={<Example2 />} />
                        </Routes>
                    </AppWrap>
                </AppContainer>
            </Router>
        </>
    );
}

export default App;
