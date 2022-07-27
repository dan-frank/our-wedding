import React from "react";
import "./content-card.css";

const ContentCard = ({ title, children }) => {
  let title_html = "";
  if (title) {
    title_html = (
      <div class="content-card__title">
        <h2 class="font-serif-2 font-size-600 font-pink-200 content-card-title">
          {title}
        </h2>
      </div>
    );
  }

  return (
    <>
      <div className="content-card">
        <div className="container">
          {title_html}
          <div className="container">{children}</div>
        </div>
      </div>
    </>
  );
};

export default ContentCard;
