import React from "react";
import "./card.css";

import { BsArrowRight } from "react-icons/bs";
import Image from "../image";
import { Link } from "react-router-dom";

const Card = ({ image, title, text, url }) => {
  return (
    <div class="card">
      <Image url={image.url} alt={image.alt} size={image.size} />

      <Link to={url} className="card__content">
        <h2 class="card__content__title font-serif-1 font-size-300 m-t-none m-b-sm">
          {title}
        </h2>
        <div class="card__content__text">
          <p class="message font-sans-serif font-transform-none m-t-sm m-b-none">
            {text}
          </p>
          <BsArrowRight />
        </div>
      </Link>
    </div>
  );
};

export default Card;
