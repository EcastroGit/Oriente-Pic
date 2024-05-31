import React from "react";
import { useState } from "react";
import styled from "styled-components";
import peñol1 from "../assets/galery/el-peñol1.webp";
import peñol2 from "../assets/galery/el-peñol2.webp";
import carmen1 from "../assets/galery/carmen-viboral1.webp";
import ceja1 from "../assets/galery/la-ceja1.webp";
import saltoBuey1 from "../assets/galery/ceja-saltobuey1.webp";
import guarne1 from "../assets/galery/guarne1.webp";
import cocorna1 from "../assets/galery/cocorna1.webp";
import cocorna2 from "../assets/galery/cocorna2.webp";
import guatape1 from "../assets/galery/guatape1.webp";
import sanCarlos1 from "../assets/galery/san-carlos1.webp";
import sanLuis1 from "../assets/galery/san-luis1.webp";
import sanRafael1 from "../assets/galery/san-rafael1.webp";

//Galery component
function PlacesGalery() {
  //Hooks to create state for the modal
  const [modal, setModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedDescription, setSelectedDescription] = useState("");

  //Function to handle the modal display
  function handleModal(image, title, description) {
    setModal((prevModal) => !prevModal);
    setSelectedImage(image);
    setSelectedTitle(title);
    setSelectedDescription(description);
  }

  //Function to create the image component to display in the galery
  function Image({ image, title, description, alt }) {
    return (
      <div>
        <img
          src={image}
          alt={alt}
          onClick={() => handleModal(image, title, description)}
        ></img>
        <div id="image-info" style={{ display: "none" }}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }

  //Function to create the Modal layer to expand images
  function Modal() {
    return (
      <ModalWrap style={{ display: modal ? "block" : "none" }}>
        <div id="close-tag">
          <i className="bi bi-x-circle" onClick={handleModal}></i>
        </div>
        <div id="image-container">
          <img src={selectedImage} alt="Paisaje del Oriente Antioqueño" />
          <h3>{selectedTitle}</h3>
          <p>{selectedDescription}</p>
        </div>
      </ModalWrap>
    );
  }

  //Return of the general Galery component
  return (
    <GaleryWrap>
      <Image
        image={peñol1}
        title="La Piedra del Peñol"
        description="La Piedra del Peñol es uno de los atributos naturales más característicos de este municipio y atrae gran cantidad de turistas."
        alt="El peñol, Antioquia."
      />
      <Image
        image={peñol2}
        title="El Peñol"
        description="El Peñol es un municipio situado en zona de embalses y con gran riqueza hídrica y natural."
        alt="El peñol, Antioquia."
      />
      <Image
        image={carmen1}
        title="El Carmen"
        description="El Carmen es un municipio con gran vocación artística, donde la cerámica y la cultura cautivan a propios y visitantes."
        alt="El Carmen, Antioquia"
      />
      <Image
        image={ceja1}
        title="La Ceja"
        description="La Ceja, Antioquia es un municipio con gran riqueza natural, pero además posee un importante desarrollo urbano."
        alt="La Ceja, Antioquia"
      />
      <Image
        image={saltoBuey1}
        title="El Salto del buey"
        description="El Salto del buey es una caída de agua natural ubicada en el municipio de la Ceja, Antioquia."
        alt="El Salto del Buey, en la Ceja"
      />
      <Image
        image={guarne1}
        title="El Alto de La Virgen"
        description="El Alto de la Virgen es un lugar ubicado en Guarne, Antioquia, sobre la via Medellín-Bogotá, y atrae anualmente gran cantidad de turistas religiosos."
        alt="Cocorná"
      />
      <Image
        image={cocorna1}
        title="Cocorná"
        description="Cocorná, Antioquia. Municipio con maravillosas fuentes hídricas y rios cristalinos."
        alt="La ceja"
      />
      <Image
        image={cocorna2}
        title="Cocorná"
        description="El municipio de Cocorná en su zona urbana."
        alt="Cocorná"
      />
      <Image
        image={guatape1}
        title="Guatapé"
        description="El Embalse de Guatapé es característico por permitir variedad de atracciónes y deportes náuticos."
        alt="Guatapé, Antioquia"
      />
      <Image
        image={sanCarlos1}
        title="San Carlos"
        description="Un municipio con gran riqueza hídrica y rios cristalinos."
        alt="San Carlos, Antioquia"
      />
      <Image
        image={sanLuis1}
        title="San Luis"
        description="Un municipio con gran riqueza hídrica y rios color turquesa que maravillan por su belleza."
        alt="San Luis, Antioquia"
      />
      <Image
        image={sanRafael1}
        title="San Rafael"
        description="Un municipio para maravillarse por su gran riqueza hídrica y disfrutar de sus aguas naturales."
        alt="San Rafael, Antioquia"
      />

      <Modal />
    </GaleryWrap>
  );
}

export default PlacesGalery;

// Styles for Galery component
const GaleryWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: fit-content;
  margin: auto;

  img {
    width: 400px;
    object-fit: cover;
    height: 250px;
    margin: 15px 15px 15px;
    transition: transform 0.7s ease;

    @media screen and (max-width: 768px) {
      max-width: 300px;
    }

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
    }
  }
`;
// Styles for Modal component
const ModalWrap = styled.div`
  position: fixed;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  top: 0;
  width: 100%;
  height: 100%;
  display: none;

  #close-tag {
    text-align: right;
    padding: 25px;
  }

  i {
    font-size: 30px;
    &:hover {
      color: orangered;
      cursor: pointer;
    }
  }

  #image-container {
    margin: 10px auto 10px;
    width: fit-content;
    max-width: 700px;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;

      @media screen and (max-width: 768px) {
        width: 600px;
      }

      @media screen and (max-width: 450px) {
        width: 100%;
      }
    }
  }
`;
