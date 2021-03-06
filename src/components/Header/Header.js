import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import logo from '../../Logo.png';
import './Header.css';

const Header = () => {
    const[loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/"> <img className="logo" src={logo} alt=""/> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/booking">Booking</Nav.Link>
                    <Nav.Link href="#blog">Blog</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    { loggedInUser.name ? (<Nav.Link className="login-user">Hi, {loggedInUser.name}</Nav.Link>) 
                    : (<Nav.Link className="menu-btn" as={Link} to="/login">Login</Nav.Link>)}
                    
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;