import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "./TitleH2";
import Spacer from "./Spacer";

const BrandsCarousel = ({title, cardsArray}) => {
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 10,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };



  return (
    <Carousel className="carousel">
      <Title
        title={title}
        description=""
      />
      <Spacer pixels="20" />
      <Slider {...settings}>
        {cardsArray.map((card) => (
          <div key={card.id} className="card">
            <img
              src={card.content}
              alt={card.alt}
            ></img>
            <p style={{fontWeight:"bold", padding:"5px 0 5px"}}>{card.name}</p>
          </div>
        ))}
      </Slider>
    </Carousel>
  );
};

export default BrandsCarousel;

const Carousel = styled.div`
  margin: auto;
  width: 70%;
  .slick-prev,
  .slick-next {
    width: 30px;
    height: 30px;
    z-index: 1;
  }
  .slick-prev:before,
  .slick-next:before {
    color: black; /* Cambia este valor al color que desees */
    font-size: 30px; /* Ajusta el tamaño del icono si es necesario */
  }
  img {
    width: 100px;
    height: 100px;
    margin: auto;
    object-fit: cover;
    transition: transform 0.7s ease;
    @media screen and (max-width: 768px) {
      max-width: 300px;
    }
    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }
  }
  #home-galery-cta {
    margin-top: 3rem;
  }
`;