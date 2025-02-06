import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AboutMe from '../pages/AboutMe';
import Home from '../pages/Home';
import FplProject from '../pages/FplProject';
import NsyncProject from '../pages/NsyncProject';

// Bootstrap Navbar with functional links to each page using react router
function Header() {
    return (
        <BrowserRouter>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>Zachary Lai</Navbar.Brand>
                    <Nav>
                        <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                        <Nav.Link as={Link} to={"/about"}>About Me</Nav.Link>
                        <NavDropdown title="Projects">
                            <NavDropdown.Item as={Link} to={"/fpl"}>FPL Predictor</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/nsync"}>NSYNC</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/fpl" element={<FplProject />} />
                <Route path="/nsync" element={<NsyncProject />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Header;