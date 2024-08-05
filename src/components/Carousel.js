import React from "react";
import Carousel1 from "../images/Carousel1.jpg";
import Carousel2 from "../images/Carousel2.jpg";
import Carousel3 from "../images/Carousel3.jpg";
import Carousel4 from "../images/Carousel4.jpg";

function Carousel() {
  return (
    <>
      <div className="carouselbox topmargin">
        <div
          id="carouselExampleInterval"
          className="carousel slide "
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval={3000}>
              <img
                src={Carousel1}
                className="d-block w-100 carouselbox"
                alt="carousel1"
              />
            </div>
            <div className="carousel-item" data-bs-interval={2000}>
              <img
                src={Carousel4}
                className="d-block w-100 carouselbox"
                alt="carousel14"
              />
            </div>
            <div className="carousel-item" data-bs-interval={2000}>
              <img
                src={Carousel3}
                className="d-block w-100 carouselbox"
                alt="carousel13"
              />
            </div>
            <div className="carousel-item" data-bs-interval={2000}>
              <img
                src={Carousel2}
                className="d-block w-100 carouselbox"
                alt="carousel12"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Carousel;
