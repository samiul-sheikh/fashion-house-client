import React, { createContext, useState } from "react";
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Admin from './Components/Admin/Admin';
import CheckOut from './Components/CheckOut/CheckOut';
import LogIn from './Components/LogIn/LogIn';
import NoMatch from './Components/NoMatch/NoMatch';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Orders from "./Components/Orders/Orders";

export const UserContext = createContext();

function App() {

    const [loggedInUser, setLoggedInUser] = useState({});

    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <PrivateRoute path="/admin">
                        <Admin />
                    </PrivateRoute>
                    <PrivateRoute path="/checkout/:id">
                        <CheckOut />
                    </PrivateRoute>
                    <PrivateRoute path="/orders">
                        <Orders />
                    </PrivateRoute>
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