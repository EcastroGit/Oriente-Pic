import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  // State for the component
  const [clicked, setClicked] = useState(false);

  //Function to handle click
  function handleClick() {
    const screenSize = window.innerWidth;
    if (screenSize <= 768) {
      setClicked(!clicked);
    }
  }

  //Function to create burguer button on mobile screens
  function BurguerButton(props) {
    return (
      <Burguer>
        <div
          onClick={props.handleClick}
          className={`icon nav-icon-5 ${props.clicked ? "open" : ""}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Burguer>
    );
  }

  //Return of the header component
  return (
    <HeaderWrap id="header">
      <Link id="logo" to="/" rel="noopener noreferrer">
        <h2>
          Oriente <span>Scenery</span>
        </h2>
      </Link>
      <nav id="navigation" className={`links ${clicked ? "active" : ""}`}>
        <Link onClick={handleClick} to="/" rel="noopener noreferrer">
          Inicio
        </Link>
        <Link onClick={handleClick} to="/places" rel="noopener noreferrer">
          Lugares
        </Link>
        <Link onClick={handleClick} to="/blog" rel="noopener noreferrer">
          Blog
        </Link>
        <Link onClick={handleClick} to="/about" rel="noopener noreferrer">
          Acerca de
        </Link>
      </nav>
      <div className="burguer">
        <BurguerButton clicked={clicked} handleClick={handleClick} />
      </div>
      <BgDiv className={`initial ${clicked ? " active" : ""}`}></BgDiv>
    </HeaderWrap>
  );
}

export default Header;

const HeaderWrap = styled.header`
  height: 80px;
  padding: 0.4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
  }

  h2 {
    color: white;
    font-weight: 400;
    margin-left: 40px;
    span {
      font-weight: bold;
    }
  }

  #navigation {
    margin-right: 40px;
    a {
      color: white;
      text-decoration: none;
      margin-right: 1rem;
      &:hover {
        color: orangered;
      }
    }
  }

  .links {
    position: absolute;
    top: -1500px;
    left: -2500px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    a {
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    z-index: 3;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer {
    z-index: 2;
    @media (min-width: 768px) {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    height: 50px;
  }
`;

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -2500px;
  left: -2500px;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: all 0.6s ease;

  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
//Styles for burguer button
const Burguer = styled.div`
  .nav-icon-5 {
    width: 30px;
    height: 25px;
    margin: 10px 10px;
    position: relative;
    cursor: pointer;
    display: inline-block;
  }
  .nav-icon-5 span {
    background-color: #fff;
    position: absolute;
    border-radius: 2px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    width: 100%;
    height: 4px;
    transition-duration: 500ms;
  }
  .nav-icon-5 span:nth-child(1) {
    top: 0px;
    left: 0px;
  }
  .nav-icon-5 span:nth-child(2) {
    top: 11px;
    left: 0px;
    opacity: 1;
  }
  .nav-icon-5 span:nth-child(3) {
    bottom: 0px;
    left: 0px;
  }
  .nav-icon-5:not(.open):hover span:nth-child(1) {
    transform: rotate(-3deg) scaleY(1.1);
  }
  .nav-icon-5:not(.open):hover span:nth-child(2) {
    transform: rotate(3deg) scaleY(1.1);
  }
  .nav-icon-5:not(.open):hover span:nth-child(3) {
    transform: rotate(-4deg) scaleY(1.1);
  }
  .nav-icon-5.open span:nth-child(1) {
    transform: rotate(45deg);
    top: 13px;
  }
  .nav-icon-5.open span:nth-child(2) {
    opacity: 0;
  }
  .nav-icon-5.open span:nth-child(3) {
    transform: rotate(-45deg);
    top: 13px;
  }
`;
