import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ShowHomeCard from './ShowHomeCard';
import './HomeCard.css'

const HomeCard = () => {
    const [item,setItem]= useState([]);
    useEffect(()=>
    fetch('fake-data.json')
    .then(res =>res.json())
    .then(data => setItem(data))
    ,[])
    const sliceItem=item.slice(0,4);
    return (
        <div className="course">
            <h1>Our Courses</h1>
            <Container>
            <Row xs={1} md={2} className="g-4 mx-auto" >
                {
                    sliceItem.map(item => <ShowHomeCard item={item}></ShowHomeCard>)
                }
            </Row>
            </Container>
        </div>
    );
};

export default HomeCard;