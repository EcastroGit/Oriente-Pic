import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Cta2({ id, className, link, text }) {
  return (
    <Cta2Wrap id={id} className={className}>
      <Link to={link} rel="noopener noreferrer">
        {text}
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
    &:hover {
      color: orangered;
    }
  }
`;
