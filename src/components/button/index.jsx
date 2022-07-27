import React from "react";
import "./button.css";

const Button = ({ text, url, style }) => {
  if (url) {
    return (
      <a href={url} className={style}>
        {text}
      </a>
    );
  }

  return <span className={style}>{text}</span>;
};

export default Button;
