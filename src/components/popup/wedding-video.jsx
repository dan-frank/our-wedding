import React from "react";
import "./popup.css";

import Popup from ".";
import Video from "../image/video";

const PopupWeddingVideo = ({ setShowPopup }) => {
  return (
    <Popup
      children={
        <Video
          size="is-16by9"
          videos={[
            {
              url: "videos/wedding.mp4",
              type: "video/mp4",
            },
            {
              url: "videos/wedding.webm",
              type: "video/webm",
            },
            {
              url: "videos/wedding.m4v",
              type: "video/m4v",
            },
          ]}
        />
      }
      setShowPopup={setShowPopup}
    />
  );
};

export default PopupWeddingVideo;
