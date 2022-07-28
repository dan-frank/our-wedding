import React from "react";
import "./popup.css";

import IFrame from "../image/iframe";
import Popup from ".";

const PopupWeddingVideo = ({ setShowPopup }) => {
  return (
    <Popup
      children={
        <IFrame
          url="https://player.vimeo.com/video/734325722?h=2ce8b63b18&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          size="is-16by9"
        />
      }
      setShowPopup={setShowPopup}
    />
  );
};

export default PopupWeddingVideo;
