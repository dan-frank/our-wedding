import React from "react";
import "./image.css";

const Image = ({ image, alt, size }) => {
  return (
    <div class={"image " + size}>
      <img src={image} alt={alt} />
    </div>
  );
};

export default Image;