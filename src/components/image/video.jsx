import React from "react";
import "./image.css";

import FloatingTitle from "../title/floating-title";

const Video = ({ title, videos, size }) => {
  let title_html = title ? <FloatingTitle title={title} /> : null;

  return (
    <div class={"image " + size}>
      {title_html}
      <video controls>
        {videos.map((video) => (
          <source src={video.url} type={video.type} />
        ))}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
