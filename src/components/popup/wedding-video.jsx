import React from "react";
import "./popup.css";

import Popup from ".";

const PopupWeddingVideo = ({ setShowPopup }) => {
  return (
    <Popup
      children={
        <div class="image is-16by9">
          <video id="weddingVideo" controls>
            <source src="videos/wedding.mp4" type="video/mp4" />
            <source src="videos/wedding.webm" type="video/webm" />
            <source src="videos/wedding.m4v" type="video/m4v" />
            Your browser does not support the video tag.
          </video>
        </div>
      }
      setShowPopup={setShowPopup}
    />
  );
};

export default PopupWeddingVideo;
