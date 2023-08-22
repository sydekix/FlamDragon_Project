import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function DrummerCarousel() {
  return (
    <Carousel className="carousel" fade>
      <Carousel.Item>
        <img className="carousel-img d-block w-100 img-fluid" src={require("../media/elvin-jones-4.jpg")} alt="Elvin Jones" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-img d-block w-100 img-fluid" src={require("../media/eliana-yamouni.jpg_large")} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-img d-block w-100 img-fluid" src={require("../media/buddy-rich.jpeg")} alt="Buddy Rich" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img d-block w-100 img-fluid" src={require("../media/carter-beauford.jpeg")} alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default DrummerCarousel;