import React from "react";
import "./content.css";

const Content = ({ position, children }) => {
  return (
    <div className={"content content--" + position}>
      <div className="container">{children}</div>
    </div>
  );
};

export default Content;
