import React from "react";
import styled from "styled-components";
import bannerImage from "../assets/site/banner-image.jpg";
import Cta from "./Cta.js";

function Banner() {
  return (
    <BannerWrap>
      <div id="banner-elements">
        <h1 id="banner-title">
          Hermosos paisajes del Oriente Antioqueño, Colombia.
        </h1>
        <br />
        <br />
        <p id="banner-text">
          Bienvenidos a la cautivadora tierra de Antioquia, donde la belleza
          natural alcanza su máxima expresión en exuberantes paisajes que
          inspiran asombro y deleite. Desde majestuosas montañas que se pierden
          en el horizonte hasta valles cubiertos de una vegetación exquisita,
          esta región de Colombia nos brinda una sinfonía visual de colores y
          formas que cautivan los sentidos.
        </p>
        <br />
        <br />
        <Cta id="banner-cta" className="cta" link="/places" text="Ver más" />
      </div>
    </BannerWrap>
  );
}

export default Banner;

const BannerWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${bannerImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.7);
  height: auto;
  padding: 100px;

  #banner-elements {
    height: auto;
    width: 70%;
    margin: auto;
    h1 {
      color: white;
      font-size: 2rem;
    }
    p {
      color: white;
      font-size: 1.5rem;
    }
    @media screen and (max-width: 1000px) {
      width: 80%;
      h1 {
        font-size: 1.7rem;
      }
      p {
        font-size: 1.2rem;
      }
    }
    @media screen and (max-width: 768px) {
      width: 80%;
      h1 {
        font-size: 1.5rem;
      }
      p {
        font-size: 1rem;
      }
    }
    @media screen and (max-width: 768px) {
      width: 95%;
     
    }
  }

  @media screen and (max-width: 768px) {
    padding: 50px;
  }
  @media screen and (max-width: 450px) {
    padding: 50px 20px 50px;
  }
`;
