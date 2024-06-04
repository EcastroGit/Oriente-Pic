import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Cta({ id, className, link, text }) {
  return (
    <StyledLink to={link} id={id} className={className} rel="noopener noreferrer">
      {text}
    </StyledLink>
  );
}

export default Cta;

const StyledLink = styled(Link)`
  background-color: transparent;
  color: white;
  font-size: 1.2rem;
  height: 50px;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 10px 20px;
  border-radius: 25px;
  border: 2px solid white;
  text-decoration: none;
  transition: background-color 500ms, color 500ms;

  &:hover {
    cursor: pointer;
    color: red;
    border: 2px solid red;
  }
`;
