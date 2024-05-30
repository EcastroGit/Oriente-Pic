import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Title from "../components/TitleH2.js";
import { mainGalery } from "../data/mainGaleryPlaces.js";
import GaleryBigCopy from "../components/GaleryBig.js";

function Places() {
  return (
    <PlacesWrap>
      <Helmet>
        <title>Lugares - Oriente Pic</title>
        <meta name="description" content="página de de lugares y fotos" />
      </Helmet>

      <section>
        <Title
          title="Galerías"
          description="En esta sección encuentras fotografías e información sobre algunos de los lugares más icónicos del Oriente Antioqueño"
        />
      </section>

      <section>
        <GaleryBigCopy imagesArray={mainGalery} />
      </section>
    </PlacesWrap>
  );
}

export default Places;

const PlacesWrap = styled.main`
  height: auto;
  padding-bottom: 6rem;
`;
