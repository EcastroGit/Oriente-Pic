import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GaleryCarousel = ({ imagesArray }) => {
  const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <Carousel className="carousel">
      <Slider {...settings}>
        {imagesArray.map((i) => (
          <div key={i.id} className="card">
            <img src={i.image} alt={i.alt}></img>
          </div>
        ))}
      </Slider>
    </Carousel>
  );
};

export default GaleryCarousel;

const Carousel = styled.div`
  margin: 2rem auto 2rem;
  width: 80%;
  .slick-prev,
  .slick-next {
    width: 30px;
    height: 30px;
    z-index: 1;
  }
  .slick-prev:before,
  .slick-next:before {
    color: black;
    font-size: 30px;
  }
  img {
    width: 400px;
    object-fit: cover;
    height: 250px;
    margin: auto;
    transition: transform 0.7s ease;

    @media screen and (max-width: 768px) {
      max-width: 300px;
    }
  }
  #home-galery-cta {
    margin-top: 3rem;
  }
`;
