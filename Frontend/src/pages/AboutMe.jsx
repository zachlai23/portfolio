import { Stack } from 'react-bootstrap';
import { Container, Row, Col, Card } from 'react-bootstrap/';
import uciLogo from '../assets/uci.png';
import clpLogo from '../assets/clpccd.jpg';
import wgtLogo from '../assets/wgtLogo.jpeg';
import stealthLogo from '../assets/stealthStart.png';
import hyelLogo from '../assets/hyelLogo.png';
import openGameLabLogo from '../assets/gameLab.png';
import React from 'react';

function AboutMe() {
    return (
        <>
        {/* Centered */}
        <h1 className="d-flex justify-content-center p-5 border ">About me</h1>
        <p className="d-flex justify-content-center p-3border">I am currently pursuing my Bachelor's degree in Computer Science at UC Irvine, with an expected graduation data of June 2026..</p>

        <Container className="p-5" fluid>
            <Row>
                {/* Left side, with icons for school, first row is school/degree, second row in smaller font is time */}
                <Col className="d-flex flex-column border p-4">
                    <h3>Education</h3>

                    <div className="d-flex align-items-start" style={{ gap: "200px"}}>
                        <img src={uciLogo} alt="UCI Logo" width="75" height="75" className="rounded-4"/>

                        <div className="d-flex flex-column">
                            <strong>UC Irvine</strong>
                            <div>B.S. Computer Science</div>
                            <div>September 2024 - June 2026</div>
                        </div>
                    </div>

                    <div className="d-flex align-items-start mt-4" style={{ gap: "200px"}}>
                        <img src={clpLogo} alt="CLP Logo" width="75" height="75" className="rounded-4"/>

                        <div className="d-flex flex-column">
                            <strong>Las Positas/Chabot Community College</strong>
                            <div>A.S. Computer Science</div>
                            <div>August 2021 - June 2024</div>
                        </div>
                    </div>

                    <h3 className="pt-5">Experience</h3>

                    <div className="d-flex align-items-start mt-4" style={{ gap: "200px"}}>
                        <img src={wgtLogo} alt="WGT Logo" width="75" height="75" className="rounded-4"/>

                        <div className="d-flex flex-column">
                            <strong>Walmart Global Tech</strong>
                            <div>Incoming Software Engineer Intern</div>
                            <div>June 2025 - August 2025</div>
                        </div>
                    </div>

                    <div className="d-flex align-items-start mt-4" style={{ gap: "200px"}}>
                        <img src={hyelLogo} alt="HYEL Logo" width="75" height="75" className="rounded-4"/>

                        <div className="d-flex flex-column">
                            <strong>HYEL</strong>
                            <div>Software Developer</div>
                            <div>October 2024 - December 2024</div>
                        </div>
                    </div>

                    <div className="d-flex align-items-start mt-4" style={{ gap: "200px"}}>
                        <img src={stealthLogo} alt="Stealth Logo" width="75" height="75" className="rounded-4"/>

                        <div className="d-flex flex-column">
                            <strong>Startup in Stealth</strong>
                            <div>Machine Learning Research Assistant</div>
                            <div>January 2024 - March 2024</div>
                        </div>
                    </div>

                    <div className="d-flex align-items-start mt-4" style={{ gap: "200px"}}>
                        <img src={openGameLabLogo} alt="Open Game Lab Logo" width="75" height="75" className="rounded-4"/>

                        <div className="d-flex flex-column">
                            <strong>Open Game Lab, Chabot College</strong>
                            <div>Group Leader</div>
                            <div>June 2023 - August 2023</div>
                        </div>
                    </div>
                </Col>

                {/* Vertical bar in middle */}

                {/* Right side, little cards with skills, expand when cursor is over them */}
                <Col className="d-flex flex-column border p-4">
                    <h3>Skills</h3>
                    <div className="d-flex align-content-start flex-wrap border">
                        <Card className="d-flex p-3 m-3">C++</Card>
                        <Card className="d-flex p-3 m-3">C</Card>
                        <Card className="d-flex p-3 m-3">Python</Card>
                        <Card className="d-flex p-3 m-3">Swift</Card>
                        <Card className="d-flex p-3 m-3">JavaScript</Card>
                        <Card className="d-flex p-3 m-3">HTML/CSS</Card>
                        <Card className="d-flex p-3 m-3">Git</Card>
                        <Card className="d-flex p-3 m-3">React</Card>
                        <Card className="d-flex p-3 m-3">Flask</Card>
                        <Card className="d-flex p-3 m-3">Express</Card>
                        <Card className="d-flex p-3 m-3">pandas</Card>
                        <Card className="d-flex p-3 m-3">scikit-learn</Card>
                    </div>

                    <h3 className="pt-5">Interests/Hobbies</h3>
                    <div className="d-flex slign-content-start flex-wrap border">
                        <Card className="d-flex p-3 m-3">Soccer</Card>
                        <Card className="d-flex p-3 m-3">Chess</Card>
                        <Card className="d-flex p-3 m-3">Fishing</Card>
                        <Card className="d-flex p-3 m-3">Computer Vision</Card>
                        <Card className="d-flex p-3 m-3">Golden State Warriors</Card>
                    </div>

                </Col>
            </Row>
        </Container>


        </>
    );
}

export default AboutMe;