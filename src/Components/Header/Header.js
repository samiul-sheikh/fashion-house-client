import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand to="#home">Fashion House</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {/* <Nav.Link to="/">Home</Nav.Link> */}
                </Nav>

                <Nav>
                    <Nav.Link to="/" as={Link}>Home</Nav.Link>
                    <Nav.Link to="/orders" as={Link}>Orders</Nav.Link>
                    <Nav.Link to="admin" as={Link}>Admin</Nav.Link>
                    <Nav.Link to="deals" as={Link}>Deals</Nav.Link>
                    <Nav.Link eventKey={2} to="login" as={Link}>Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;