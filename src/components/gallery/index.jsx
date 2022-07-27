import React from "react";
import "./gallery.css";

import Lightbox from "../image/lightbox";

const Gallery = ({ size, images }) => {
  return (
    <div className="images">
      {images.map((image) => {
        image.size = size;
        return (
          <Lightbox
            url={image.url}
            alt={image.alt}
            size={image.size}
            lightbox={image.lightbox}
          />
        );
      })}
    </div>
  );
};

export default Gallery;
