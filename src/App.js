import React from "react";
import './App.css';
import Home from './Components/Home/Home';
import AddProduct from './Components/AddProduct/AddProduct';
import CheckOut from './Components/CheckOut/CheckOut';
import LogIn from './Components/LogIn/LogIn';
import NoMatch from './Components/NoMatch/NoMatch';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/addProduct">AddProduct</Link>
                    </li>
                    <li>
                        <Link to="/checkOut">CheckOut</Link>
                    </li>
                    <li>
                        <Link to="/login">LogIn</Link>
                    </li>
                </ul>

                <hr />

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
            </div>
        </Router>
    );
}

export default App;
