import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

function CardsGroup({ cardsArray }) {
  const theme = useSelector((state) => state.theme.themeMode);

  return (
    <CardsGroupWrap>
      {cardsArray.map((i) => {
        return (
          <div
            className="info-card"
            key={i.id}
            style={{
              backgroundColor: `${theme === "dark" ? "#202127" : "white"}`,
            }}
          >
            <img src={i.src} alt={i.alt} />
            <div>
              <h3>{i.title}</h3>
              <p>{i.content}</p>
            </div>
          </div>
        );
      })}
    </CardsGroupWrap>
  );
}

export default CardsGroup;

const CardsGroupWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 15px;
  width: 75%;
  margin: auto;
  .info-card {
    width: 200px;
    height: 200px;
    padding: 5px;
    border: 1px solid #585858;
    border-radius: 8px;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
    transition: transform 0.7s ease;
    &:hover {
      cursor: pointer;
      transform: scale(1.03);
      box-shadow: 0px 0px 7px #e6320099;
    }
    img {
      height: 45%;
      object-fit: cover;
    }
    h3 {
      font-size: 1rem;
      margin-bottom: 10px;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;
