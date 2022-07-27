import React from "react";
import "./cards.css";

import Card from "./card";

const Cards = ({ size, cards }) => {
  return (
    <div className="cards">
      {cards.map((card, index) => {
        card.image.size = size;

        return (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            text={card.text}
            url={card.url}
          />
        );
      })}
    </div>
  );
};

export default Cards;
