import React from 'react';
import { Card, Col } from 'react-bootstrap';
// import { Link } from 'rect-router-dom';
import './HomeCard.css'

const ShowHomeCard = (props) => {
    console.log(props.item)
    const { item } = props;
    const { course, instractor, duration, price, img } = item
    return (
        <div>
            <Col>
                <Card className="card">
                    <Card.Img variant="top" src={img} className="card-img mx-auto" />
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

export default ShowHomeCard;