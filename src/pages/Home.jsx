import React from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Banner from "../components/Banner";
import Title from "../components/TitleH2";
import GaleryCarousel from "../components/GaleryCarousel";
import Cta from "../components/Cta";
import BoxImageText from "../components/BoxImageText";
import earth from "../assets/site/earth.webp";
import Landscape from "../assets/site/section2-landscape.webp";
import Spacer from "../components/Spacer";
import { imagesCarousel } from "../data/homeImagesCarousel";

function Home() {
  const theme = useSelector((state) => state.theme.themeMode);

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
        <Title
          title="Fotografías"
          description="Aquí te presentamos algunos de 
      los lugares más hermosos del Oriente Antioqueño."
        />
        <GaleryCarousel imagesArray={imagesCarousel} />
        <Cta id="home-galery-cta" text="Ver todas" link="/places" />
      </section>

      <Spacer pixels="50" />

      <section
        style={{
          backgroundColor: `${theme === "dark" ? "#202127" : "#d3d3d3"}`,
        }}
      >
        <BoxImageText
          imgClassName="spin"
          imageSrc={earth}
          alt="Ilustración de la tierra"
          title="Acciones que contribuyen a cuidar la casa común"
          text=" En la era actual, donde el cambio climático y la degradación ambiental
          se presentan como desafíos globales urgentes, el cuidado del planeta se
          ha convertido en una responsabilidad compartida por todos."
          ctaLink="/social"
          ctaText="Conocer más"
        />
      </section>

      <section>
        <BoxImageText
          className=""
          imageSrc={Landscape}
          alt="Fotografía del Oriente Antioqueño"
          title="El Oriente Antioqueño"
          text="EL oriente antioqueño es una zona geográfica de gran riqueza turística
          y paisajística, con muchos lugares para explorar y maravillarse de su
          belleza natural. Existen 4 subregiones principales conformadas por
          Altiplano, Embalses, Bosques y Páramos; para un total de 23
          municipios."
          ctaLink="/oriente-antioqueño"
          ctaText="Conocer más"
        />
      </section>
    </HomeWrap>
  );
}

export default Home;

const HomeWrap = styled.main`
  height: fit-content;
`;
