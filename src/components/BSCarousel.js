import React from "react";
import { Carousel } from "react-bootstrap";
import "../styles/carousel.scss";

function BSCarousel() {
  return (
    <Carousel controls={false} className="carousel">
      <Carousel.Item className="carousel__slide-1">
        <img
          className="carousel__slide-img"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="carousel__slide-title">FROM Graduations</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel__slide-2">
        <img
          className="carousel__slide-img"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="carousel__slide-title">To Marching Events</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel__slide-3">
        <img
          className="carousel__slide-img"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="carousel__slide-title">& Even Family Moments</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BSCarousel;
