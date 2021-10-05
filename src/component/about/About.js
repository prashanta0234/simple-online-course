import React from 'react';
import './About.css';
import image from '../../image/Courses-Logo.png'
import { Container } from 'react-bootstrap';
const About = () => {
    return (
        <div className="about">
            <Container>
            <h1>About Us</h1>
            <img src={image} alt="" className="w-40" />
            <p>We are Creative web design and development company.  We start a course bucause of we want to learn web-design and development for begainer.We are google certified Companey.</p>
            </Container>
        </div>
    );
};

export default About;