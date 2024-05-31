import React from "react";
import { useState } from "react";
import styled from "styled-components";


//Galery component
function HomeGalery({ imagesArray, imgQuantity }) {
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
      {imagesArray.slice(0, imgQuantity).map((i) => (
        <div key={i.id}>
          <img
            src={i.image}
            alt={i.alt}
            onClick={() => handleModal(i.image, i.title, i.description)}
          />
          <div id="image-info" style={{ display: "none" }}>
            <h3>{i.title}</h3>
            <p>{i.description}</p>
          </div>
        </div>
      ))}
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
