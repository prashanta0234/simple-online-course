import React from 'react';
import { Carousel } from 'react-bootstrap';
import image from '../../image/banner.jpg'
import image1 from '../../image/front-end-development.jpg'
import image2 from '../../image/node-js-banner.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel className="slider">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Become a web-developer</h3>
                        
                    </Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Learn web-development</h3>
                        
                    </Carousel.Caption>


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Become a frelancer</h3>
                        
                    </Carousel.Caption>

                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;