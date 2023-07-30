import React from "react";
import styled from "styled-components";
import Section2Landscape from "../assets/site/section2-landscape.jpg";
import Cta2 from "./Cta2";

function HomeSection2() {
  return (
    <HomeSection2Wrap>
      <div id="section2-image" className="container">
        <img src={Section2Landscape} alt="" />
      </div>
      <div id="section2-text" className="container">
        <p>
          EL oriente antioqueño es una zona geográfica de gran riqueza turística
          y paisajística, con muchos lugares para explorar y maravillarse de su
          belleza natural. Existen 4 subregiones principales conformadas por
          Altiplano, Embalses, Bosques y Páramos; para un total de 23
          municipios.
        </p>
        <Cta2 link="/oriente-antioqueño" text="Conocer más" />
      </div>
    </HomeSection2Wrap>
  );
}

export default HomeSection2;

const HomeSection2Wrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  font-size: 1.3rem;
  margin: auto;
  padding: 80px;
  height: fit-content;
  width: 80%;

  #section2-image {
    margin: 10px auto 10px;
    padding: 10px;
    width: 50%;

    img {
      max-width: 100%;
      transition: transform 2s ease;
      &:hover {
        cursor: pointer;
        transform: scale(1.05);
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
      }
    }

    @media screen and (max-width: 768px) {
      width: 80%;
    }
    @media screen and (max-width: 450px) {
      width: 95%;
    }
  }

  #section2-text {
    margin: 10px auto 10px;
    padding: 10px;
    width: 50%;
    text-align: left;

    @media screen and (max-width: 768px) {
      width: 80%;
    }
    @media screen and (max-width: 450px) {
      width: 95%;
    }
  }

  @media screen and (max-width: 1000px) {
    font-size: 1.1rem;
    padding: 80px 50px 80px;
  }

  @media screen and (max-width: 768px) {
    flex-flow: column wrap;
  }

  @media screen and (max-width: 600px) {
    padding: 80px 30px 80px;
    width: 90%;
  }

  @media screen and (max-width: 450px) {
    font-size: 1rem;
    width: 95%;
    padding: 80px 0 80px;
  }
`;
