import React from "react";
import "./content-card.css";

const ContentCard = ({ children }) => {
  return (
    <div className="content-card">
      <div className="container">{children}</div>
    </div>
  );
};

export default ContentCard;
