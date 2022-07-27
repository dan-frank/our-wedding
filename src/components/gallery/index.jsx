import React from "react";
import "./gallery.css";

import Image from "../image";

const Gallery = ({ size, images }) => {
  return (
    <div className="images">
      {images.map((image) => {
        image.size = size;
        return <Image url={image.url} alt={image.alt} size={image.size} />;
      })}
    </div>
  );
};

export default Gallery;
