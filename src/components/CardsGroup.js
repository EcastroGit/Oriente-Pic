import React from "react";
import styled from "styled-components";

function CardsGroup({ cardsArray }) {
  return (
    <CardsGroupWrap>
  
        {cardsArray.map((card) => {
          return (
            <div className="info-card" key={card.key}>
              <img src={card.src} alt={card.alt} />
              <div>
                <h3>{card.title}</h3>
                <p>{card.content}</p>
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
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
    transition: transform 0.7s ease;
    &:hover {
      cursor: pointer;
      transform: scale(1.03);
      box-shadow: 0px 0px 7px rgba(230, 50, 0, 0.6);
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
