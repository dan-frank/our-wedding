import React from "react";
import "./message.css";

import Spacer from "../spacer";

const Message = ({ message }) => {
  return (
    <div class="message">
      <div class="container-message">
        <Spacer size={600} />

        <h2 class="font-serif-1 font-size-500 font-light font-shadow font-center">
          {message}
        </h2>

        <Spacer size={600} />
      </div>
    </div>
  );
};

export default Message;
