import React from "react";
import styled from "styled-components";
import Cta2 from "./Cta2";

const ImageTextBox = ({ className, image, alt, title, text, link, ctaLink }) => {
  return (
    <BoxImageTextWrap className={className}>
      <div className="box-image">
        <img src={image} alt={alt} />
      </div>

      <div className="box-text">
        <h2>{title}</h2>
        <br />
        <br />
        <p>{text}</p>
        <Cta2 link={link} text={ctaLink} />
      </div>
    </BoxImageTextWrap>
  );
};

export default ImageTextBox;

const BoxImageTextWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  height: fit-content;
  width: 80%;
  margin: auto;
  padding: 80px;

  .box-image {
    width: 50%;
    margin: 10px auto 10px;
    padding: 10px;
    img {
      width: 80%;
      transition: transform 2s ease;
      &:hover {
        cursor: pointer;
        transform: scale(1.05);
      }
    }
    @media screen and (max-width: 1200px) {
      width: 60%;
    }
    @media screen and (max-width: 1000px) {
      width: 70%;
    }
    @media screen and (max-width: 768px) {
      width: 90%;
    }
    @media screen and (max-width: 450px) {
      width: 95%;
    }
  }

  .box-text {
    width: 50%;
    margin: 10px auto 10px;
    padding: 10px;
    text-align: left;
    h2 {
      font-size: 2rem;
      @media screen and (max-width: 450px) {
        text-align: center;
      }
    }
    p {
      font-size: 1.4rem;
    }
    @media screen and (max-width: 1200px) {
      width: 70%;
    }
    @media screen and (max-width: 1000px) {
      width: 80%;
    }
    @media screen and (max-width: 768px) {
      width: 90%;
    }
    @media screen and (max-width: 450px) {
      width: 95%;
    }
  }

  @media screen and (max-width: 1200px) {
    flex-flow: column wrap;
    padding: 80px 50px 80px;
    font-size: 1.1rem;
  }
  @media screen and (max-width: 1000px) {
    padding: 80px 50px 80px;
    font-size: 1.1rem;
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 600px) {
    width: 90%;
    padding: 80px 30px 80px;
  }
  @media screen and (max-width: 450px) {
    width: 95%;
    padding: 50px 0 50px;
    font-size: 1rem;
  }
`;
