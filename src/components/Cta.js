import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Cta({ id, className, link, text }) {
  return (
    <CtaWrap id={id} className={className}>
      <Link to={link} rel="noopener noreferrer">
        {text}
      </Link>
    </CtaWrap>
  );
}

export default Cta;

const CtaWrap = styled.div`
  background-color: red;
  color: white;
  font-size: 20px;
  height: fit-content;
  width: fit-content;
  margin: auto;
  border-radius: 4px;
  padding: 7px;
  transition: background-color 500ms, color 500ms;

  &:hover {
    background-color: #ff7f27;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: white;
    width: auto;
  }
`;
