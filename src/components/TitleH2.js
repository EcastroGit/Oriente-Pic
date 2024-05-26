import React from "react";
import styled from "styled-components";

function Title({ className, title, description }) {
  return (
    <TitleWrap className={className}>
      <br />
      <h2>{title}</h2>
      <p>{description}</p>
      <br />
    </TitleWrap>
  );
}

export default Title;

const TitleWrap = styled.div`
  margin: auto;
  height: fit-content;
  width: 70%;
  h2 {
    margin: 4rem auto 1rem;
    font-size: 2rem;
    @media screen and (max-width: 450px) {
      margin: 3rem auto 1rem;
    }
  }
  p {
    font-size: 1.4rem;
    margin: 0 auto 2rem;
    font-size: 22px;
    @media screen and (max-width: 450px) {
      margin: 0 auto 2rem;
    }
  }
  @media screen and (max-width: 450px) {
    width: 90%;
  }
`;
