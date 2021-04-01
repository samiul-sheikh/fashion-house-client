import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="nav">
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
            </nav>
        </div>
    );
};

export default Header;