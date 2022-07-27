import React from "react";
import "./banner.css";

import Button from "../button";
import { BsPlayFill } from "react-icons/bs";

const Banner = () => {
  return (
    <div class="banner-container">
      <div class="banner-circle-container">
        <div class="banner-circle">
          <div class="play-button popup-trigger" data-target="popup-video">
            <BsPlayFill />
          </div>

          <div class="banner-image">
            <div class="image-shape square">
              <img src="./images/kiss-small.jpg" alt="bride and groom kiss" />
            </div>
          </div>

          <div class="banner-content">
            <h2 class="font-serif-2 font-light font-size-500 font-light m-y-sm">
              Our Wedding
            </h2>
            <h1 class="font-serif-1 font-light font-size-600 font-light m-y-sm">
              The Perfect Day
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
