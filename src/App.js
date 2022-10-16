import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Login from './Components/Login/Login';
import Signup from "./Components/Signup/Signup";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import HeaderBlock from "./Components/HeaderBlock/HeaderBlock";
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";
import TeslaAccount from "./Components/TeslaAccount/TeslaAccount";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";

function App() {
    const user = useSelector(selectUser)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            console.log('THE USER IS >>>', authUser)
            if (authUser) {
                //user is logged in
                dispatch(login({
                    uid: authUser.uid,
                    email: authUser.email,
                    displayName: authUser.displayName,
                }))
            } else {
                //user is logged out
                dispatch(logout())
            }
        })
    }, [dispatch])

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
                        {user ? <Redirect to='/teslaaccount' /> : <Login />}
                        <Login />
                    </Route>
                    <Route exact path='/signup'>
                        <Signup />
                    </Route>
                    <Route exact path='/teslaaccount'>
                        {!user ? (
                            <Redirect to='/login' />
                        ) : (
                            <>
                                <TeslaAccount
                                    isMenuOpen={isMenuOpen}
                                    setIsMenuOpen={setIsMenuOpen}
                                />
                                {isMenuOpen && <Menu />}
                            </>
                        )}
                    </Route>
                </Switch>
            </div>
        </Router>
);
}

export default App;
