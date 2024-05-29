import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Banner from "../components/Banner.js";
import Carousel from "../components/GaleryCarousel.js";
import BoxImageText from "../components/BoxImageText.js";
import earth from "../assets/site/earth.webp";
import Landscape from "../assets/site/section2-landscape.webp";

function Home() {
  return (
    <HomeWrap id="home">
      <Helmet>
        <title>Paisajes del Oriente Antioqueño - Oriente Pic</title>
        <meta
          name="description"
          content="Descubre los lugares más hermosos del Oriente de Antioquia, Colombia."
        />
      </Helmet>

      <section>
        <Banner />
      </section>
      <section>
        <Carousel />
      </section>
      <section>
        <BoxImageText
          className="spin"
          image={earth}
          alt="Ilustración de la tierra"
          title="Acciones que contribuyen a cuidar la casa común"
          text=" En la era actual, donde el cambio climático y la degradación ambiental
          se presentan como desafíos globales urgentes, el cuidado del planeta se
          ha convertido en una responsabilidad compartida por todos."
          link="/social"
          ctaLink="Conocer más"
        />
      </section>
      <section>
        <BoxImageText
          className=""
          image={Landscape}
          alt="Fotografía del Oriente Antioqueño"
          title="El Oriente Antioqueño"
          text="EL oriente antioqueño es una zona geográfica de gran riqueza turística
          y paisajística, con muchos lugares para explorar y maravillarse de su
          belleza natural. Existen 4 subregiones principales conformadas por
          Altiplano, Embalses, Bosques y Páramos; para un total de 23
          municipios."
          link="/oriente-antioqueño"
          ctaLink="Conocer más"
        />
      </section>
    </HomeWrap>
  );
}

export default Home;

const HomeWrap = styled.main`
  height: fit-content;
  .spin img {
    animation: rotate 150s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
