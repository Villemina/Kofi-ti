import React from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './menu.scss'

const Menu = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Kofi&Ti</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link >
                            <Link to="/">Strona Główna</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/about">Menu</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/events">Wydarzenia</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/contact">Kontakt</Link>
                        </Nav.Link>
                    </Nav>
                    <Nav.Link >
                        <Link to="/">Rezerwacje</Link>
                    </Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;