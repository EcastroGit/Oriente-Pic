import React from "react";
import styled from "styled-components";
import Cta2 from "./Cta2";

const ImageTextBox = ({
  className,
  imgClassName,
  imageSrc,
  alt,
  title,
  text,
  ctaLink,
  ctaText
}) => {
  return (
    <BoxImageTextWrap className={className}>
      <div className="box-image">
        <img className={imgClassName} src={imageSrc} alt={alt} />
      </div>

      <div className="box-text">
        <h2>{title}</h2>
        <br />  
        <p>{text}</p>
        <Cta2 link={ctaLink} text={ctaText} />
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
      @media screen and (max-width: 1400px) {
        font-size: 1.8rem;
      }
    }
    p {
      font-size: 1.4rem;
      @media screen and (max-width: 1400px) {
        font-size: 1.2rem;
      }
      @media screen and (max-width: 1200px) {
        font-size: 1.1rem;
      }
    }
    @media screen and (max-width: 1200px) {
      width: 80%;
    }
    @media screen and (max-width: 1000px) {
      width: 90%;
    }
    @media screen and (max-width: 768px) {
      width: 95%;
    }
    @media screen and (max-width: 450px) {
      width: 100%;
    }
  }

  @media screen and (max-width: 1200px) {
    flex-flow: column wrap;
    width: 75%;
  }
  @media screen and (max-width: 1000px) {
    width: 80%;
    padding: 80px 40px 80px;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    padding: 70px 30px 70px;
  }
  @media screen and (max-width: 600px) {
    width: 90%;
    padding: 60px 20px 60px;
  }
  @media screen and (max-width: 450px) {
    width: 95%;
    padding: 50px 10px 50px;
  }
`;
