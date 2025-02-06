import React from 'react';
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { Container, Row, Col } from 'react-bootstrap/';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import FplProject from './FplProject';

// Home Page - Link to project page, external links to LinkedIn & Github, 

function Home() {
    return (
    <Container fluid className="p-5">
        <Row className="d-flex justify-content-center align-items-center p-5 border">
            <Col className="text-center">
                <h1>Hi, I'm Zach!</h1>
            </Col>
        </Row>
        <Row className="d-flex p-5 border">
            <Col className = "text-center">
                <p>Learn more <Link to="/about">about me</Link></p>
            </Col>
        </Row>
        <Row className="d-flex p-5">
            <Col className="text-center">
                <Row className="d-flex border">
                    <p>Check out my projects:</p>
                </Row>
                <Row className="d-flex border">
                    <Link to="/fpl">Fantasy Soccer Points Predictor</Link>
                </Row>
                <Row className="d-flex border">
                    <Link to="/nsync">NSYNC</Link>
                </Row>
            </Col>
        </Row>
        <Row className="d-flex justify-content-center border">
            <Col className="d-flex justify-content-end border">
                <a href="https://www.linkedin.com/in/zachary-lai-251463227" target="_blank">
                    <FaLinkedin size="3em" color="black"/>
                </a>
            </Col>
            <Col className="d-flex justify-content-start border">
                <a href="https://github.com/zachlai23" target="_blank">
                    <FaGithubSquare size="3em" color="black"/>
                </a>
            </Col>
        </Row>
    </Container>
    );
}

export default Home;