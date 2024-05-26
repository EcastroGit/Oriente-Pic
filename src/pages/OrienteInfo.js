import React from "react";
import { Helmet } from "react-helmet";
import Title from "../components/TitleH2";
import styled from "styled-components";

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
        <Title title="El Oriente Antioqueño" description="" />
      </section>
      <section>
        <div id="oriente-info">
          <p>
            Antioquia, uno de los departamentos más diversos y pintorescos de
            Colombia, alberga una región que enamora a los visitantes con su
            deslumbrante belleza natural y rica herencia cultural: el Oriente
            Antioqueño. Esta región, ubicada al este de la ciudad de Medellín,
            la capital del departamento, cautiva a los aventureros, amantes de
            la naturaleza y curiosos culturales con una mezcla única de paisajes
            impresionantes, pueblos encantadores y tradiciones arraigadas. El
            oriente antioqueño está conformado por las siguiente cuatro
            subregiones:
            <br />
            <br />
            <strong>Zona de altiplano:</strong>
            <br />
            <br />
            El Carmen de Viboral, El Retiro, Santuario, Guarne, La Ceja,
            Marinilla, La Unión, Rionegro y San Vicente.
            <br />
            <br />
            <strong>Zona de embalses:</strong>
            <br />
            <br />
            Alejandría, Concepción, El peñol, Granada, Guatapé, San Carlos y San
            Rafael.
            <br />
            <br />
            <strong>Zona de páramo:</strong>
            <br />
            <br />
            Sonsón, Nariño, Argelia y Abejorral.
            <br />
            <br />
            <strong>Zona de bosques:</strong>
            <br />
            <br />
            Cocorná, San Francisco y San Luis.
          </p>
          <p>
            <br />
            <br />
            <strong>Paisajes de ensueño.</strong>
            <br />
            <br />
            El Oriente Antioqueño está bendecido con paisajes de ensueño que
            dejan sin aliento a quienes los contemplan. Las majestuosas montañas
            de los Andes colombianos se alzan en toda su gloria, ofreciendo
            panorámicas impresionantes que se extienden hasta donde alcanza la
            vista. La región está salpicada de valles verdes, cascadas
            imponentes y ríos serpenteantes que dan vida a este paraíso natural.
            Uno de los lugares más emblemáticos y fotografiados del Oriente
            Antioqueño es el famoso "Peñol de Guatapé" o "La Piedra del Peñol".
            Una imponente formación rocosa de más de 200 metros de altura, que
            emerge abruptamente del paisaje circundante. Subir los 700 escalones
            hasta la cima ofrece una vista panorámica inigualable del embalse de
            Guatapé y sus innumerables islas.
          </p>
          <p>
            <br />
            <br />
            <strong>Encanto colonial y arquitectura tradicional.</strong>
            <br />
            <br />
            Los pueblos delOriente Antioqueño son una verdadera joya
            arquitectónica. Con sus calles empedradas, casas coloridas con
            balcones de madera tallada y fachadas adornadas con flores, cada uno
            de ellos tiene su propia personalidad encantadora. Guatapé es uno de
            los pueblos más queridos, famoso por sus zócalos coloridos, paneles
            de piedra con relieves que cuentan historias de la vida local. Otros
            pueblos destacados incluyen Rionegro, con su arquitectura colonial y
            plaza principal llena de vida, y Marinilla, con su iglesia de estilo
            neogótico y ambiente relajado. Explorar estos pueblos es como viajar
            atrás en el tiempo, permitiendo a los visitantes sumergirse en la
            auténtica esencia de la vida tradicional antioqueña.
          </p>
          <p>
            <br />
            <br />
            <strong>Tradiciones culturales y fiestas típicas.</strong>
            <br />
            <br />
            El Oriente Antioqueño eshogar de una cultura rica y diversa, en la
            que las tradiciones se mantienen con orgullo. Los habitantes de esta
            región son cálidos, amigables y acogedores, y a menudo invitan a los
            visitantes a participar en sus festivales y celebraciones. Entre las
            festividades más conocidas están la Feria de las Flores en Medellín
            y el Festival del Maíz en San Carlos. Durante estas fiestas, las
            calles se llenan de música, danzas folclóricas y coloridos desfiles,
            mientras se disfruta de la deliciosa gastronomía típica, como la
            bandeja paisa y la arepa antioqueña.
          </p>
          <p>
            <br />
            <br />
            <strong>Turismo de aventura y ecoturismo.</strong>
            <br />
            <br />
            Para los amantes de la naturalezay la aventura, el Oriente
            Antioqueño ofrece numerosas actividades al aire libre. Los hermosos
            paisajes montañosos son perfectos para practicar senderismo y
            ciclismo de montaña. También puedes disfrutar de emocionantes
            deportes acuáticos en los lagos y embalses de la región. Para los
            más audaces, el parapente es una experiencia única, que permite
            volar sobre los valles y apreciar la región desde una perspectiva
            totalmente nueva. Además, hay varias reservas naturales y parques
            nacionales que preservan la exuberante biodiversidad de la región,
            donde los observadores de aves y amantes de la naturaleza pueden
            deleitarse con la fauna y flora local.
          </p>
          <p>
            <br />
            <br />
            <strong>El café, orgullo y sabor de la región.</strong>
            <br />
            <br />
            Colombia es famosa por su café, y el Oriente Antioqueño no es la
            excepción. La región cuenta con numerosas fincas cafeteras donde los
            visitantes pueden aprender sobre el proceso de cultivo, recolección
            y producción del café. Conocido por su sabor distintivo y aroma
            cautivador, degustar una taza de café recién hecho en el lugar de su
            origen es una experiencia enriquecedora.
          </p>
          <p>
            <br />
            <br />
            El Oriente Antioqueño es una región colombiana que combina paisajes
            impresionantes, encanto colonial, rica cultura y tradiciones
            arraigadas. Es un destino ideal para aquellos que buscan una
            experiencia auténtica y en contacto con la naturaleza, mientras se
            deleitan con la calidez y hospitalidad de su gente. Visitar esta
            región es sumergirse en un rincón especial de Colombia que deja
            huella en el corazón de quienes la exploran.
          </p>
        </div>
      </section>
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
