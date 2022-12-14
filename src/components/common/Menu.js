import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import "./menu.css"

const Menu = () => {
    return (
        <Navbar className='bg-color' expand="lg" variant='dark' >
            <Container>
                <Navbar.Brand as={Link} to='/' href="/">Recetas</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto me-0">
                        <NavLink className='nav-item nav-link' end to='/'>Home</NavLink>
                        <NavLink className='nav-item nav-link' end to='/iniciosesion'>Inicio Sesion</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;