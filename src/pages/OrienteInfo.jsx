import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Title from "../components/TitleH2";
import ResponsiveText from "../components/ResponsiveText75";
import Spacer from "../components/Spacer";
import CardsGroup from "../components/CardsGroup";
import { cardsOrienteRegions } from "../data/orienteAntCards";

function OrienteInfo() {
  return (
    <OrienteInfoWrap>
      <Helmet>
        <title>Acerca del Oriente Antioqueño</title>
        <meta
          name="description"
          content="Descubre inforamción sobre la región del Oriente Antioqueño, Colombia."
        />
      </Helmet>

      <section>
        <Title title="El Oriente Antioqueño" />
        <ResponsiveText
          text="Antioquia, uno de los departamentos más diversos y pintorescos de Colombia, alberga una región que enamora a los visitantes con su deslumbrante belleza natural y rica herencia cultural. El Oriente Antioqueño, región ubicada cerca a la ciudad de Medellín, capital del departamento, cautiva a los aventureros, amantes de la naturaleza y curiosos culturales con una mezcla única de paisajes impresionantes, municipios encantadores y tradiciones arraigadas. El oriente antioqueño está conformado por las siguiente cuatro subregiones:"
          textAlign="left"
        />
      </section>

      <Spacer pixels="50" />

      <section>
        <CardsGroup cardsArray={cardsOrienteRegions} />
      </section>

      <Spacer pixels="100" />
    </OrienteInfoWrap>
  );
}

export default OrienteInfo;

const OrienteInfoWrap = styled.div`
  height: auto;

  #oriente-info {
    text-align: left;
    width: 70%;
    margin: auto;
    padding-bottom: 6rem;
    @media screen and (max-width: 768px) {
      width: 85%;
    }
    @media screen and (max-width: 450px) {
      width: 95%;
    }
  }
`;
