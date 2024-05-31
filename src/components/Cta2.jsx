import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Cta2({ id, className, link, text }) {
  return (
    <Cta2Wrap id={id} className={className}>
      <Link to={link} rel="noopener noreferrer">
        {text}
        <i class="bi bi-arrow-right" style={{ marginLeft: "5px" }}></i>
      </Link>
    </Cta2Wrap>
  );
}

export default Cta2;

const Cta2Wrap = styled.div`
  color: red;
  margin: 30px auto 30px;
  width: fit-content;
  &:hover {
    transform: scale(1.1);
  }

  a {
    color: red;
    font-size: 1.4rem;
    font-weight: 600;
    &:hover {
      color: orangered;
    }
    @media screen and (max-width: 600px){
      font-size: 1.2rem;
    }
  }
`;
