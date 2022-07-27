import React from "react";
import "./footer.css";

import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div class="footer">
      <p class="font-sans-serif m-y-none">
        Designed and developed by Daniel Lucas
      </p>

      <p class="font-sans-serif m-y-none">
        Download from{" "}
        <a
          href="https://github.com/dan-frank/our_wedding"
          target="_blank"
          rel="noreferrer"
          class="button-link"
        >
          <BsGithub /> GitHub
        </a>
      </p>
    </div>
  );
};

export default Footer;
