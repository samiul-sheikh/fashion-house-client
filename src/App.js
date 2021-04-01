import React, { createContext, useState } from "react";
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import AddProduct from './Components/AddProduct/AddProduct';
import CheckOut from './Components/CheckOut/CheckOut';
import LogIn from './Components/LogIn/LogIn';
import NoMatch from './Components/NoMatch/NoMatch';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

export const UserContext = createContext();

function App() {

    const [loggedInUser, setLoggedInUser] = useState({});

    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <p>Name: {loggedInUser.name}</p>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route path="/addProduct">
                        <AddProduct />
                    </Route>
                    <Route path="/checkOut">
                        <CheckOut />
                    </Route>
                    <Route path="/login">
                        <LogIn />
                    </Route>
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
