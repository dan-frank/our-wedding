import React from "react";
import "./footer.css";

import Button from "../button";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div class="footer">
      <p class="font-sans-serif m-y-none">
        Designed and developed by Daniel Lucas
      </p>

      <p class="font-sans-serif m-y-none">
        Website hosted on{" "}
        <Button
          text={
            <>
              <BsGithub /> GitHub
            </>
          }
          url="https://github.com/dan-frank/our_wedding"
          modifiers="button button--link"
          blank={true}
        />
      </p>
    </div>
  );
};

export default Footer;
