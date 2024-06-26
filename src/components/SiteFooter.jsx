import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <FooterWrap id="footer">
      <div id="footer-navigation">
        <span>
          <Link to="/places">Lugares</Link>
        </span>
        <span>
          <Link to="/social">Social</Link>
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
        <p>© Copyright 2023 - Oriente Pic</p>
      </div>
      <div id="credits">
        <p>
          Desarrollado por <strong>Esteban Castro</strong>
        </p>
      </div>
    </FooterWrap>
  );
}

export default Footer;

const FooterWrap = styled.footer`
  display: flex;
  flex-flow: column nowrap;
  background-color: #222224;
  color: white;
  height: fit-content;
  padding: 12px;
  border-top: 2px solid #3a3a3f;

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
