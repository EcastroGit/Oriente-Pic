import React from "react";
import styled from "styled-components";
import Title from "./TitleH2";
import HomeGalery from "./HomeGalery";
import Cta from "./Cta";

function HomeSection1() {
  return (
    <HomeSection1Wrap id="section1-container">
      <Title
        title="Fotografías"
        description="Aquí te presentamos algunos de 
      los lugares más hermosos del Oriente Antioqueño."
      />

      <HomeGalery />

      <Cta id="home-galery-cta" text="Ver más" link="/places" />
    </HomeSection1Wrap>
  );
}

export default HomeSection1;

const HomeSection1Wrap = styled.div`
  height: fit-content;
  #home-galery-cta {
    margin-top: 25px;
  }
`;
