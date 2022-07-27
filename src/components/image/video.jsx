import React from "react";
import "./image.css";

const Video = ({ videos, size }) => {
  return (
    <div class={"image " + size}>
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
