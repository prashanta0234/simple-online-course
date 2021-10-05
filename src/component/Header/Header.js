import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import logo from '../../image/Logo.png'
const Header = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <img
                            src={logo}
                            width="200"
                            height="50"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>

                    <Nav className="ms-auto">
                        <NavLink to="/home" className="nav-link" activeClassName="selected">Home</NavLink>
                        <NavLink to="/service" className="nav-link" activeClassName="selected">Service</NavLink>
                        <NavLink to="/about" className="nav-link" activeClassName="selected">About</NavLink>
                        <NavLink to="/contact" className="nav-link" activeClassName="selected">Contact</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;