import React from "react";
import "./button.css";

const Button = ({ text, url, modifiers, blank }) => {
  if (url) {
    const target = blank ? `target="_blank" rel="noreferrer"` : "";

    return (
      <a href={url} className={modifiers} {...target}>
        {text}
      </a>
    );
  }

  return <span className={modifiers}>{text}</span>;
};

export default Button;
