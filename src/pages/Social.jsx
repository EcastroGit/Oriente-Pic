import React from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Title from "../components/TitleH2";
import ResponsiveImage from "../components/ResponsiveImage30";
import earth from "../assets/site/earth.webp";
import Spacer from "../components/Spacer";
import ResponsiveText from "../components/ResponsiveText75";
import BrandsCarousel from "../components/BrandsCarousel";
import BoxImageText from "../components/BoxImageText";
import sustainability from "../assets/site/sustainability.webp";
import { accionesResponsables } from "../data/iconsCarousel";

function Social() {
  const theme = useSelector((state) => state.theme.themeMode);

  return (
    <SocialWrap id="social">
      <Helmet>
        <title>Social - Oriente Pic</title>
        <meta
          name="description"
          content="Algunas acciones que pueden contribuir a cuidar nuestro planeta"
        />
      </Helmet>

      <section>
        <Title
          title="Social"
          description="Acciones que contribuyen a cuidar la casa común"
        />
      </section>

      <section>
        <ResponsiveImage
          src={earth}
          className="spin"
          alt="ilustración planeta tierra"
        />
        <Spacer pixels="20" />
        <ResponsiveText
          text="En la era actual, donde el cambio climático y la degradación ambiental
        se presentan como desafíos globales urgentes, el cuidado del planeta se
        ha convertido en una responsabilidad compartida por todos. Desde
        individuos hasta gobiernos y corporaciones, cada actor tiene un papel
        crucial en la preservación de nuestro entorno natural."
          textAlign="left"
        />
        <Spacer pixels="60" />
      </section>

      <section
        style={{
          backgroundColor: `${theme === "dark" ? "#202127" : "#d3d3d3"}`,
        }}
      >
        <BrandsCarousel
          title="Acciones responsables"
          cardsArray={accionesResponsables}
        />
        <Spacer pixels="60" />
      </section>

      <Spacer pixels="50" />

      <section>
        <BoxImageText
          imageSrc={sustainability}
          alt="Sostenibilidad"
          title="Equilibrio natural"
          text=" La biodiversidad y los recursos naturales son esenciales para la  vida. Sin embargo, actividades humanas como la deforestación, la quema de combustibles fósiles y la contaminación han puesto en riesgo estos  elementos cruciales. Descubre algunas iniciativas para aportar al equilibrio ambiental."
          ctaText="Más información"
          ctaLink="#"
        />
      </section>
    </SocialWrap>
  );
}

export default Social;

const SocialWrap = styled.main`
  height: auto;
  padding-bottom: 5rem;
`;
