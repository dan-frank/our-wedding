import React from "react";
import "./content-card.css";

import FloatingTitle from "../title/floating-title";

const ContentCard = ({ title, children }) => {
  let title_html = title ? <FloatingTitle title={title} /> : null;

  return (
    <div className="content-card">
      <div className="container">
        {title_html}
        <div className="container">{children}</div>
      </div>
    </div>
  );
};

export default ContentCard;
