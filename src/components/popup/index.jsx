import React from "react";
import "./popup.css";

const Popup = ({ id, children }) => {
  return (
    <div id={"popup--" + id} className="popup">
      <div className="popup-content">{children}</div>
    </div>
  );
};

export default Popup;
