import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ReactDOM from "react-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const MyCarousel = () => (
  <Container fluid>
    <Carousel>
      <Carousel.Item>
        <img
          width={400}
          height={500}
          className="d-block w-100"
          src={require("../Home/busking/IMG_2265.jpg")}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{ color: "black" }} class="display-2">
            First Featured Artist
          </h3>
          <Button variant="primary" size="lg" active>
            Primary button
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          width={400}
          height={500}
          className="d-block w-100"
          src={require("../Home/busking/IMG_2265.jpg")}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 style={{ color: "black" }} class="display-2">
            Second Featured Artist
          </h3>
          <Button variant="primary" size="lg" active>
            Primary button
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          width={400}
          height={500}
          className="d-block w-100"
          src={require("../Home/busking/IMG_2265.jpg")}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 style={{ color: "black" }} class="display-2">
            Third Featured Artist
          </h3>
          <Button variant="primary" size="lg" active>
            Primary button
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </Container>
);

export default MyCarousel;
