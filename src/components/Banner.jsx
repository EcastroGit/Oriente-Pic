import React from "react";
import styled from "styled-components";
import bannerImage from "../assets/site/banner-image.webp";
import Cta from "./Cta";
import Cta1 from "./Cta1";

function Banner() {
  return (
    <BannerWrap>
      <div id="banner-elements">
        <h1 id="banner-title">Lugares en el Oriente Antioqueño, Colombia.</h1>
        <br />
        <br />
        <p id="banner-text">
          El Oriente Antioqueño es una cautivadora tierra donde la belleza
          natural alcanza su máxima expresión en exuberantes paisajes que
          inspiran asombro y deleite.
        </p>
        <br />
        <br />
        <div id="banner-cta">
          <Cta className="cta" link="/places" text="Ver fotos" />
          <Cta1 className="cta" link="/about" text="Acerca de" />
        </div>
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${bannerImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.7);
  height: 85vh;
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
      font-size: 1.6rem;
    }
    #banner-cta {
      display: flex;
      flex-flow: row nowrap;
      gap: 5px;
      width: fit-content;
      margin: auto;
    }
    @media screen and (max-width: 1000px) {
      width: 80%;
      h1 {
        font-size: 1.8rem;
      }
      p {
        font-size: 1.4rem;
      }
    }
    @media screen and (max-width: 768px) {
      width: 80%;
      h1 {
        font-size: 1.6rem;
      }
      p {
        font-size: 1.2rem;
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
