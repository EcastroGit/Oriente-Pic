import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Title from "../components/TitleH2";

function About() {
  return (
    <AboutWrap>
      <Helmet>
        <title>Acerca de - Scenery</title>
        <meta
          name="description"
          content="Conoce más sobre Oriente Scenery, nuestro propósito es dar a conocer la belleza del Oriente Antioqueño."
        />
      </Helmet>

      <section>
        <Title title="Que es Oriente Scenery?" description="" />
      </section>

      <section>
        <div id="about">
          <p>
            Oriente Scenery es una aplicación web sobre turismo y fotografías en
            el Oriente Antioqueño, desarrollada para exaltar la belleza de esta
            región de Antioquia, la cual posee una gran riqueza natural y
            paisajística. En el sitio web también encuentras artículos de blog
            donde podrás descubrir información relevante sobre lugares por
            descubrir en esta maravillosa región, e información que te ayudará a
            comprender la historia de algunos de los lugares más icónicos del
            Oriente Antioqueño.
          </p>
        </div>
      </section>
    </AboutWrap>
  );
}

export default About;

const AboutWrap = styled.main`
  #about {
    width: 60%;
    height: 100vh;
    margin: auto;
    text-align: left;
    font-size: 1.2rem;
    @media screen and (max-width: 768px) {
      width: 80%;
      font-size: 1.1rem;
    }
  }
`;
