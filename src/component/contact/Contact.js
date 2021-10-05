import React from 'react';
import { Container, Form } from 'react-bootstrap';
import './Contact.css'
const Contact = () => {
    return (
        <div className="contact" >
            <Container>
                <div className="contact-header">
                <h1>Contact us</h1>
                </div>
            <Form className="contact-form">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Your Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} className="textArea" />
                </Form.Group>
               
                    <button>Send</button>
            </Form>
            </Container>
        </div>
    );
};

export default Contact;