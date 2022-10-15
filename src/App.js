import React, {useState} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <Router>
            <div className="App">
                <Header isMenuOpen={isMenuOpen} setIsmenuOpen={setIsMenuOpen}/>
            </div>
        </Router>
);
}

export default App;
