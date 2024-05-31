import React from "react";
import styled from "styled-components";

function ResponsiveText({ text, textAlign }) {
  return (
    <ResponsiveTextWrap>
      <p style={{ textAlign: `${textAlign}` }}>{text}</p>
    </ResponsiveTextWrap>
  );
}

export default ResponsiveText;

const ResponsiveTextWrap = styled.div`
  width: 75%;
  margin: auto;
  font-size: 1.4rem;
  padding: 30px;
  @media screen and (max-width: 1400px) {
    width: 80%;
    font-size: 1.2rem;
    padding: 25px;
  }
  @media screen and (max-width: 1200px) {
    width: 80%;
    font-size: 1.1rem;
    padding: 20px;
  }
  @media screen and (max-width: 1000px) {
    width: 85%;
    padding: 15px;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 450px) {
    width: 95%;
  }
`;
