import React from "react";
import "./card.css";

import Image from "../image";
import { BsArrowRight } from "react-icons/bs";

const Card = ({ image, title, text, url }) => {
  return (
    <div class="card">
      <Image url={image.url} alt={image.alt} size={image.size} />

      <a class="card__content" href={url}>
        <h2 class="card__content__title font-serif-1 font-size-300 m-t-none m-b-sm">
          {title}
        </h2>
        <div class="card__content__text">
          <p class="message font-sans-serif font-transform-none m-t-sm m-b-none">
            {text}
          </p>
          <BsArrowRight />
        </div>
      </a>
    </div>
  );
};

export default Card;
