import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Title from "../components/TitleH2";

function Social() {
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
      <section id="text">
        En la era actual, donde el cambio climático y la degradación ambiental
        se presentan como desafíos globales urgentes, el cuidado del planeta se
        ha convertido en una responsabilidad compartida por todos. Desde
        individuos hasta gobiernos y corporaciones, cada actor tiene un papel
        crucial en la preservación de nuestro entorno natural. Este artículo
        explora diversas formas de cuidar el planeta, destacando la importancia
        de la sostenibilidad y acciones prácticas que pueden implementarse para
        asegurar un futuro saludable para las generaciones venideras. La
        Importancia del Cuidado del Planeta
        <br />
        <br />
        El planeta Tierra es nuestro hogar común, y su salud es directamente
        proporcional a nuestra supervivencia y bienestar. La biodiversidad, el
        equilibrio climático y los recursos naturales son esenciales para la
        vida. Sin embargo, actividades humanas como la deforestación, la quema
        de combustibles fósiles y la contaminación han puesto en riesgo estos
        elementos cruciales. El cuidado del planeta no solo implica conservar
        los recursos naturales, sino también garantizar que los ecosistemas
        puedan seguir sosteniendo vida en todas sus formas. Acciones para Cuidar
        el Planeta
        <br />
        <br />
        <strong>Reducir, Reutilizar y Reciclar:</strong> La gestión de residuos
        es fundamental. Reducir el consumo de productos desechables, reutilizar
        artículos y reciclar materiales puede disminuir significativamente la
        cantidad de basura que acaba en vertederos y océanos.
        <br />
        <br />
        <strong>Uso Responsable del Agua:</strong> El agua es un recurso finito.
        Adoptar prácticas como reparar fugas, utilizar dispositivos de ahorro de
        agua y optar por plantas nativas que requieren menos riego puede
        contribuir a la conservación de este vital recurso.
        <br />
        <br />
        <strong>Energía Sostenible:</strong> Transicionar a fuentes de energía
        renovable como la solar, eólica e hidroeléctrica reduce la dependencia
        de combustibles fósiles, disminuyendo así las emisiones de gases de
        efecto invernadero. Invertir en eficiencia energética, como el uso de
        bombillas LED y electrodomésticos eficientes, también ayuda.
        <br />
        <br />
        <strong>Movilidad Sostenible:</strong> Optar por el transporte público,
        bicicletas, caminar o vehículos eléctricos reduce la huella de carbono
        asociada con los desplazamientos diarios. Promover políticas de
        movilidad sostenible en las ciudades es esencial para un cambio a gran
        escala.
        <br />
        <br />
        <strong>Consumo Responsable:</strong> Elegir productos locales y de
        temporada, reducir el consumo de carne y evitar productos con alto
        impacto ambiental son decisiones que pueden minimizar nuestra huella
        ecológica. Apoyar a empresas que adoptan prácticas sostenibles también
        fomenta un cambio positivo en la industria.
        <br />
        <br />
        <strong>Protección de Ecosistemas:</strong> Participar en proyectos de
        reforestación, proteger áreas naturales y apoyar la conservación de la
        fauna y flora son acciones directas que ayudan a mantener la
        biodiversidad. Los parques nacionales y las reservas naturales necesitan
        de nuestro apoyo y respeto.
        <br />
        <br />
        <strong>Educación y Conciencia</strong>
        <br />
        <br />
        La educación es una herramienta poderosa para el cambio. Informar y
        sensibilizar a las personas sobre la importancia del cuidado del planeta
        puede inspirar acciones sostenibles. Las escuelas, comunidades y medios
        de comunicación juegan un papel crucial en la difusión de conocimientos
        y prácticas ecológicas. El Papel de los Gobiernos y las Corporaciones
        <br />
        <br />
        Las políticas gubernamentales pueden incentivar o desalentar prácticas
        sostenibles. Legislaciones que promuevan la energía renovable, la
        protección ambiental y la responsabilidad empresarial son esenciales.
        Las corporaciones, por su parte, deben adoptar modelos de negocio que
        integren la sostenibilidad en su núcleo, reduciendo su impacto ambiental
        y promoviendo la innovación verde. Conclusión
        <br />
        <br />
        El cuidado del planeta es una tarea colectiva que requiere el esfuerzo y
        compromiso de todos los sectores de la sociedad. Las acciones
        individuales, combinadas con políticas robustas y prácticas
        empresariales responsables, pueden generar un cambio significativo. Es
        nuestra responsabilidad y privilegio proteger el único hogar que
        tenemos, asegurando que la Tierra pueda seguir sustentando vida en toda
        su diversidad y riqueza para las generaciones futuras. Actuar ahora es
        no solo una opción, sino una necesidad urgente.
      </section>
    </SocialWrap>
  );
}

export default Social;

const SocialWrap = styled.main`
  height: auto;
  padding-bottom: 5rem;
  #text {
    width: 75%;
    margin: auto;
    text-align: left;
  }
`;
