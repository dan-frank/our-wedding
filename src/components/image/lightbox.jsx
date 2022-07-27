import React from "react";
import "lightbox2/dist/css/lightbox.min.css";
import "lightbox2/dist/js/lightbox-plus-jquery.min.js";

import Image from ".";

const Lightbox = ({ url, alt, size, lightbox }) => {
  return (
    <a href={lightbox.url} data-lightbox={lightbox.group}>
      <Image url={url} alt={alt} size={size} />
    </a>
  );
};

export default Lightbox;
