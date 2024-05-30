import React from "react";
import styled from "styled-components";

function ResponsiveText({ text, textAlign }) {
  return (
    <ResponsiveTextWrap>
      <p style={{ textAlign: `${textAlign}` }}>
        {text}
      </p>
    </ResponsiveTextWrap>
  );
}

export default ResponsiveText;

const ResponsiveTextWrap = styled.div`
  width: 75%;
  margin: auto;
  font-size: 1.4rem;
  @media screen and (max-width: 1000px){
    width: 80%;
  }
  @media screen and (max-width: 768px){
    width: 85%;
  }
  @media screen and (max-width: 450px){
    width: 90%;
  }
  ;
`;
