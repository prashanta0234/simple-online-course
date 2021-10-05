import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './Service.css'
import ShowServiceCard from './ShowServiceCard';
const Service = () => {
    const [items,setItems]= useState([]);
    useEffect(()=>
    fetch('fake-data.json')
    .then(res =>res.json())
    .then(data => setItems(data))
    ,[])
    return (
        <div className="service">
            <h1>Services</h1>
            <Container>
            <Row xs={1} md={3} className="g-2 mx-auto" >
                {
                    items.map(item => <ShowServiceCard item={item}></ShowServiceCard>)
                }
            </Row>
            </Container>
        </div>
    );
};

export default Service;