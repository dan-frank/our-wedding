import React, { useState } from "react";
import "./banner.css";

import Button from "../button";
import { BsPlayFill } from "react-icons/bs";
import PopupWeddingVideo from "../popup/wedding-video";
import Image from "../image";

const Banner = ({ image, title }) => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  return (
    <div class="banner-container">
      <div class="banner-circle-container">
        <div class="banner-circle">
          <div
            class="play-button popup-trigger"
            data-target="popup-video"
            onClick={openPopup}
          >
            <BsPlayFill />
          </div>
          {showPopup ? <PopupWeddingVideo setShowPopup={setShowPopup} /> : null}

          <div class="banner-image">
            <Image url={image.url} alt={image.alt} size="is-square" />
          </div>

          <div class="banner-content">
            <h2 class="font-serif-2 font-light font-size-500 font-light m-y-sm">
              Our Wedding
            </h2>
            <h1 class="font-serif-1 font-light font-size-600 font-light m-y-sm">
              {title}
            </h1>
            <p class="font-sans-serif">
              <Button
                text={<span>Join Us As We Remember Our Special Day</span>}
                url="/"
                modifiers="button button--white button--line"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
