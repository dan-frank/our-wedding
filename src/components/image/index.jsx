import React from "react";
import "./image.css";

const Image = ({ url, alt, size }) => {
  return (
    <div class={"image " + size}>
      <img src={url} alt={alt} />
    </div>
  );
};

export default Image;
