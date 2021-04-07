import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
// import {  Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <div>

            {/* <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="#home">Fashion House</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>

                    <Nav>
                    <Link to="/">Home</Link>
                    <Link to="/admin">Admin</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/login">LogIn</Link>
                        <Nav.Link href="orders">Orders</Nav.Link>
                        <Nav.Link href="admin">Admin</Nav.Link>
                        <Nav.Link href="deals">Deals</Nav.Link>
                        <Nav.Link eventKey={2} href="login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> */}

            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/admin">Admin</Link>
                    </li>
                    <li>
                        <Link to="/orders">Orders</Link>
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