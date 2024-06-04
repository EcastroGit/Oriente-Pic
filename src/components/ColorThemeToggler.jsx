import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { changeTheme } from "../redux/themeSlice";

function ColorThemeToggler() {
  const [toggled, setToggled] = useState(false);
  const dispatch = useDispatch();

  function handleToggle() {
    const newToggled = !toggled;
    setToggled(newToggled);
    const theme = newToggled ? "dark" : "light";
    dispatch(changeTheme(theme));
  }

  return (
    <TogglerWrap>
      <div id="toggler" onClick={handleToggle}>
        <div className={`toggler-icon ${toggled ? "toggled" : ""}`}>
          <i
            className={`bi bi-${toggled ? "moon-stars-fill" : "sun-fill"}`}
            style={{ color: `${toggled ? "white" : "#e4ac12"}` }}
          ></i>
        </div>
      </div>
    </TogglerWrap>
  );
}

export default ColorThemeToggler;

const TogglerWrap = styled.div`
  height: auto;
  width: 40px;
  margin: 0 2rem 0;
  padding-top: 3px;
  #toggler {
    height: 20px;
    width: 100%;
    margin: auto;
    background-color: #6d6d6d;
    border-radius: 10px;
    position: relative;
    &:hover {
      cursor: pointer;
    }
  }
  .toggler-icon {
    height: 20px;
    width: 20px;
    margin: left;
    background-color: #3b496d;
    border-radius: 10px;
    transition: transform 0.3s;
    i {
      color: white;
    }
  }
  .toggler-icon.toggled {
    transform: translateX(20px);
  }
`;
