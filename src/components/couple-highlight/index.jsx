import React from "react";
import "./couple-highlight.css";

import Image from "../image";

const CoupleHighlight = ({ initials, image, title, name, button }) => {
  return (
    <div class={"happy-person happy-person--" + title}>
      <div class="happy-person__initials">
        <p class="font-size-700 font-pink-300 font-serif-2 m-none">
          {initials}
        </p>
      </div>

      <div class="happy-person__image">
        <Image url={image} alt={"The " + title} size="is-3by4" />
      </div>

      <div class="happy-person__name">
        <p class="font-sans-serif happy-person__title">
          The {title.charAt(0).toUpperCase() + title.slice(1)}
        </p>
        <h3 class="font-serif-1 font-size-600 m-y-sm">{name}</h3>
        {button}
      </div>
    </div>
  );
};

export default CoupleHighlight;
