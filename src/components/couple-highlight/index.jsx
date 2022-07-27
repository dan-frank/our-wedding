import React from "react";
import "./couple-highlight.css";

const CoupleHighlight = ({ initials, image, title, name, button }) => {
  return (
    <div class={"happy-person happy-person--" + title}>
      <div class="happy-person__initials">
        <p class="font-size-700 font-pink-300 font-serif-2 m-none">
          {initials}
        </p>
      </div>

      <div class="happy-person__image">
        <div class="image-shape rec-3-by-4">
          <img src={image} alt={"The " + title} />
        </div>
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
