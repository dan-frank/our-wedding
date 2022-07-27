import React from "react";
import "./gallery.css";

import FloatingTitle from "../title/floating-title";
import Lightbox from "../image/lightbox";

const Gallery = ({ title, size, images }) => {
  let title_html = title ? <FloatingTitle title={title} /> : null;

  return (
    <div className="images">
      {title_html}
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
