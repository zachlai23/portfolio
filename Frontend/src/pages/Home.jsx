import React from 'react';
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { Container, Row, Col } from 'react-bootstrap/';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import FplProject from './FplProject';

// Home Page - Link to project page, external links to LinkedIn & Github, 

function Home() {
    return (
    <Container fluid="md-9">
        <Row className="text-center mb-8">
            <h1>Hi, I'm Zach!.</h1>
        </Row>
        <Row className="text-center">
            <p>Learn more <Link to="/about">about me</Link></p>
        </Row>
        <Row className="text-center mb-8">
            <p>Check out my projects:</p>
            <Link to="/fpl">Fantasy Soccer Points Predictor</Link>
            <Link to="/nsync">NSYNC</Link>
        </Row>
        <Row className="text-center mb-8">
            <Col className="d-flex justify-content-center mx-1">
                <a href="https://www.linkedin.com/in/zachary-lai-251463227" target="_blank">
                    <FaLinkedin size="3em" color="black"/>
                </a>
            </Col>
            <Col className="d-flex justify-content-center mx-1">
                <a href="https://