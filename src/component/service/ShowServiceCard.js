import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ShowServiceCard = (props) => {
    const { item } = props;
    const { course, instractor, duration, price, img } = item
    return (
        <div>
            <Col>
                <Card className="service-card">
                    <Card.Img variant="top" src={img} className="service-card-img mx-auto" />
                    <Card.Body>
                        <Card.Title>Course Name: {course}</Card.Title>
                        <Card.Text>
                          <h6>Instractor: {instractor}</h6>
                          <h6> Duration: {duration}</h6>
                          <h6>Price: {price}</h6>
                        </Card.Text>
                        <button>Enroll</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ShowServiceCard;