import React, {useState} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Login from './Components/Login/Login';
import {BrowserRouter as Router, Routes, Switch, Route, Redirect} from "react-router-dom";
import HeaderBlock from "./Components/HeaderBlock/HeaderBlock";

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path='/'>
                        <Header isMenuOpen={isMenuOpen} setIsmenuOpen={setIsMenuOpen}/>
                        {isMenuOpen && <Menu />}
                        <HeaderBlock />
                    </Route>
                    <Route exact path='/login'>
                        <Login />
                    </Route>
                </Switch>
            </div>
        </Router>
);
}

export default App;
