import { Stack } from 'react-bootstrap';
import { Container, Row, Col, Card } from 'react-bootstrap/';
import React from 'react';

function AboutMe() {
    return (
        <>
        {/* Centered */}
        <h1 className="d-flex justify-content-center p-5 border ">About me</h1>
        <p className="d-flex justify-content-center p-3border">I am currently pursuing my Bachelor's degree in Computer Science at UC Irvine.</p>

        <Container className="p-5" fluid>
            <Row>
                {/* Left side, with icons for school, first row is school/degree, second row in smaller font is time */}
                <Col className="d-flex flex-column border p-4">
                    <h3>Education</h3>

                    <div className="d-flex justify-content-between border">
                        <div className="d-flex justify-content-start border">Irvine icon</div>

                        <div className="d-flex flex-column border p-3">
                            <strong>UC Irvine</strong>
                            <div>B.S. Computer Science</div>
                            <div>September 2024 - June 2026</div>
                        </div>

                    </div>

                    <div className="d-flex justify-content-between border">
                        <div className="d-flex justify-content-start border">LPC/CC icon</div>

                        <div className="d-flex flex-column border p-3">
                            <strong>Las Positas/Chabot Community College</strong>
                            <div>A.S. Computer Science</div>
                            <div>August 2021 - June 2024</div>
                        </div>

                    </div>
                </Col>

                {/* Vertical bar in middle */}

                {/* Right side, little cards with skills, expand when cursor is over them */}
                <Col className="d-flex flex-column border p-4">
                    <h3>Skills</h3>
                    <div className="d-flex align-content-start flex-wrap border">
                        <Card className="d-flex p-1 m-1">C++</Card>
                        <Card className="d-flex p-1 m-1">C</Card>
                        <Card className="d-flex p-1 m-1">Python</Card>
                        <Card className="d-flex p-1 m-1">Swift</Card>
                        <Card className="d-flex p-1 m-1">JavaScript</Card>
                        <Card className="d-flex p-1 m-1">HTML/CSS</Card>
                        <Card className="d-flex p-1 m-1">Git</Card>
                        <Card className="d-flex p-1 m-1">React</Card>
                        <Card className="d-flex p-1 m-1">Flask</Card>
                        <Card className="d-flex p-1 m-1">Express</Card>
                        <Card className="d-flex p-1 m-1">pandas</Card>
                        <Card className="d-flex p-1 m-1">scikit-learn</Card>
                    </div>
                </Col>
            </Row>
        </Container>


        </>
    );
}

export default AboutMe;