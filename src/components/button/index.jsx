import React from "react";
import "./button.css";

const Button = ({ text, url, modifiers, blank }) => {
  if (url) {
    if (blank) {
      return (
        <a href={url} className={modifiers} target="_blank" rel="noreferrer">
          {text}
        </a>
      );
    }

    return (
      <a href={url} className={modifiers}>
        {text}
      </a>
    );
  }

  return <span className={modifiers}>{text}</span>;
};

export default Button;
