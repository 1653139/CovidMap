import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Layout = (props) => {
    return <>
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="/" bg="light">Covid Information</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="ml-auto pr-md-5 navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" className="nav-link">Map</Link>
                    <Link to="/chartdashboard" className="nav-link">Chart Dashboard</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <div style={{ marginTop: "15px" }}>
            {props.children}
        </div>
    </>
};

export default Layout;