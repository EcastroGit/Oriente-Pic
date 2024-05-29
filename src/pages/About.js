import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Title from "../components/TitleH2";

function About() {
  return (
    <AboutWrap>
      <Helmet>
        <title>Acerca de - Oriente Pic</title>
        <meta
          name="description"
          content="Conoce más sobre Oriente Scenery, nuestro propósito es dar a conocer la belleza del Oriente Antioqueño."
        />
      </Helmet>

      <section>
        <Title title="Que es Oriente Pic?" description="" />
      </section>

      <section>
        <div id="about">
          <p>
            Oriente Pic es una aplicación web sobre turismo y fotografías en el
            Oriente Antioqueño, desarrollada para exaltar la belleza de esta
            región de Antioquia, la cual posee una gran riqueza natural y
            paisajística. En el sitio web también encuentras artículos de blog
            donde podrás descubrir información relevante sobre lugares por
            descubrir en esta maravillosa región, e información que te ayudará a
            comprender la historia de algunos de los lugares más icónicos del
            Oriente Antioqueño.
            <br />
            <br />
            La app esta pensada para crear y compartir contenido sobre algunos
            de los lugares más icónicos y destinos turísticos para visitar en
            Colombia, y en especial en esta maravillosa región de Antioquia. Es
            un proyecto que esperamos poder expandir a futuro, para ofrecer una
            app más completa, y así una mejor experiencia de usuario, donde las
            personas puedan descubrir contenido de mucho valor, a través del
            cual puedan aumentar su comprensión de estos lugares, y quizás,
            tomar decisiones en términos de turismo.
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
    height: auto;
    margin: auto;
    padding-bottom: 8rem;
    text-align: left;
    font-size: 1.2rem;
    @media screen and (max-width: 768px) {
      width: 80%;
      font-size: 1.1rem;
    }
  }
`;
