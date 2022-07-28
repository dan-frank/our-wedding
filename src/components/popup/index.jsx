import React, { useRef } from "react";
import "./popup.css";

const Popup = ({ children, setShowPopup }) => {
  const popupRef = useRef();
  const closePopup = (e) => {
    if (e.target === popupRef.current) {
      setShowPopup(false);
    }
  };

  return (
    <div className="popup" ref={popupRef} onClick={closePopup}>
      <div className="popup__content">{children}</div>
    </div>
  );
};

export default Popup;
