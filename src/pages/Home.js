import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Banner from "../components/HomeBanner.js";
import HomeSection1 from "../components/HomeSection1.js";
import HomeSection2 from "../components/HomeSection2.js";

function Home() {
  return (
    <HomeWrap id="home">
      <Helmet>
        <title>Paisajes del Oriente Antioqueño - Scenery</title>
        <meta
          name="description"
          content="Descubre los lugares más hermosos del oriente de antioquia."
        />
      </Helmet>

      <section>
        <Banner />
      </section>
      <section>
        <HomeSection1 />
      </section>
      <section>
        <HomeSection2 />
      </section>
    </HomeWrap>
  );
}

export default Home;

const HomeWrap = styled.main`
  height: fit-content;
`;
