import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <Container>
            <Row md={2} >
                <Col>
                <h6>JH Learner</h6>
                <h6>Since 2021</h6>
                <h6>&copy;JH Learner</h6>
                </Col>
                <Col>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Contact</li>
                </ul>
                </Col>

            </Row>
            </Container>
        </div>
    );
};

export default Footer;