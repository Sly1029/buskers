import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import ReactDOM from "react-dom";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const MyCarousel = () => (
  <Container fluid>
  <Carousel>
  <Carousel.Item>
    <img
      width = {400}
      height= {500}
      className="d-block w-100"
      src={require('../Home/busking/IMG_2265.jpg')}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 style={{color:'black'}} class="display-2">First slide label</h3>
      <p style={{color:'black'}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      width = {400}
      height = {500}
      className="d-block w-100"
      src={require('../Home/busking/IMG_2265.jpg')}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 style={{color:'black'}} class="display-2">Second slide label</h3>
      <p style={{color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      width={400}
      height={500}
      className="d-block w-100"
      src={require('../Home/busking/IMG_2265.jpg')}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 style={{color:'black'}} class="display-2">Third slide label</h3>
      <p style={{color:'black'}}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Container>
);




export default MyCarousel;
