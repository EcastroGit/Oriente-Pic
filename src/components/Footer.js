import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <FooterWrap id="footer">
      <div id="footer-navigation">
        <span>
          <Link to="/">Inicio</Link>
        </span>
        <span>
          <Link to="/places">Lugares</Link>
        </span>
        <span>
          <Link to="/blog">Blog</Link>
        </span>
        <span>
          <Link to="/about">Acerca de</Link>
        </span>
      </div>
      <div id="policies">
        <span>
          <Link to="/Privacy-policy">Política de privacidad</Link>
        </span>
      </div>
      <div id="copyright">
        <p>© Copyright 2023 - Oriente Scenery</p>
      </div>
      <div id="credits">
        <p>
          Developed by <strong>Esteban Castro</strong>
        </p>
      </div>
    </FooterWrap>
  );
}

export default Footer;

const FooterWrap = styled.footer`
  display: flex;
  flex-flow: column nowrap;
  background-color: #333;
  color: white;
  padding: 12px;
  height: fit-content;

  #footer-navigation {
    a {
      text-decoration: none;
      color: white;
      margin: 7px;
      &:hover {
        color: orangered;
        cursor: pointer;
      }
    }
  }

  #policies {
    a {
      text-decoration: none;
      color: white;
      &:hover {
        color: orangered;
        cursor: pointer;
      }
    }
  }

  div {
    margin: 5px 0 5px;
  }
`;
