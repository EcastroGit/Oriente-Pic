import React from "react";
import { useState } from "react";
import styled from "styled-components";
import peñol1 from "../assets/galery/el-peñol1.webp";
import carmen1 from "../assets/galery/carmen-viboral1.webp";
import ceja1 from "../assets/galery/la-ceja1.webp";
import cocorna1 from "../assets/galery/cocorna1.webp";

//Galery component
function HomeGalery() {
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
        title="El peñol"
        description="El Peñol zona de embalses."
        alt="El peñol"
      />
      <Image
        image={carmen1}
        title="El carmen"
        description="Tierra de cerámica y arte."
        alt="El carmen"
      />
      <Image
        image={ceja1}
        title="La ceja"
        description="La Ceja es un municipio con gran riqueza natural e importante desarrollo urbano."
        alt="La ceja"
      />
      <Image
        image={cocorna1}
        title="Cocorná"
        description="Un municipio con gran riqueza hídrica para disfrutar de sus rios cristalinos."
        alt="Cocorná"
      />

      <Modal />
    </GaleryWrap>
  );
}

export default HomeGalery;

// Styles for Galery component
const GaleryWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
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
