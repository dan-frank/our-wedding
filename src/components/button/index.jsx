import React from "react";
import "./button.css";

const Button = ({ text, url, modifiers }) => {
  if (url) {
    return (
      <a href={url} className={modifiers}>
        {text}
      </a>
    );
  }

  return <span className={modifiers}>{text}</span>;
};

export default Button;
