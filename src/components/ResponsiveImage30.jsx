import React from "react";
import styled from "styled-components";

function ResponsiveImage({ src, className, alt }) {
  return (
    <ResponsiveImageWrap>
      <img src={src} alt={alt} className={className} />
    </ResponsiveImageWrap>
  );
}

export default ResponsiveImage;

const ResponsiveImageWrap = styled.div`
  width: 100%;
  img {
    width: 30%;
    @media screen and (max-width: 1400px) {
      width: 35%;
    }
    @media screen and (max-width: 1200px) {
      width: 40%;
    }
    @media screen and (max-width: 1000px) {
      width: 45%;
    }
    @media screen and (max-width: 768px) {
      width: 50%;
    }
    @media screen and (max-width: 450px) {
      width: 55%;
    }
  }
`;
