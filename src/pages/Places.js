import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Title from "../components/TitleH2.js";
import PlacesGalery from "../components/PlacesGalery.js";

function Places() {
  return (
    <PlacesWrap>
      <Helmet>
        <title>Lugares - Scenery</title>
        <meta name="description" content="página de de lugares y fotos" />
      </Helmet>

      <section>
        <Title
          title="Descubre hermosos lugares"
          description="En esta sección encuentras fotografías e información de los lugares más 
        hermosos del oriente antioqueño"
        />
      </section>

      <section>
        <PlacesGalery />
      </section>
    </PlacesWrap>
  );
}

export default Places;

const PlacesWrap = styled.main`
height: auto;
padding-bottom: 6rem;
`;
