import React from "react";
import "./floating-title.css";

const FloatingTitle = ({ title }) => {
  return (
    <div class="floating-title">
      <h2 class="font-serif-2 font-size-600 font-pink-200 content-card-title">
        {title}
      </h2>
    </div>
  );
};

export default FloatingTitle;
