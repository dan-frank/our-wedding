import React from "react";
import "./image.css";

import Image from "../image";

const ImageBanner = ({ url, alt, size }) => {
  return (
    <div class="image-banner">
      <Image url={url} alt={alt} size={size} />
    </div>
  );
};

export default ImageBanner;
