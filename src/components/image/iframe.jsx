import React from "react";
import "./image.css";

import FloatingTitle from "../title/floating-title";

const IFrame = ({ title, url, size }) => {
  let title_html = title ? <FloatingTitle title={title} /> : null;

  return (
    <div class={"image " + size}>
      {title_html}
      <iframe
        src={url}
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        title="Daniel &amp;amp; Becca Lucas&amp;#039; Wedding"
      ></iframe>
    </div>
  );
};

export default IFrame;
