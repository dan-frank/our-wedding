import React from "react";
import "./spacer.css";

const Spacer = ({ size }) => {
  return <div class={"spacer spacer--" + size}></div>;
};

export default Spacer;
