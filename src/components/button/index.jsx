import React from "react";
import "./button.css";

import { Link } from "react-router-dom";

const Button = ({ text, url, modifiers }) => {
  if (url) {
    if (url.pathname) {
      return (
        <Link to={url} className={modifiers} target="_blank" rel="noreferrer">
          {text}
        </Link>
      );
    }

    return (
      <Link to={url} className={modifiers}>
        {text}
      </Link>
    );
  }

  return <span className={modifiers}>{text}</span>;
};

export default Button;
