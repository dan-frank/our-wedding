import React from "react";
import "./content.css";

const Content = ({ position, children }) => {
  return <div className={"content content--" + position}>{children}</div>;
};

export default Content;
