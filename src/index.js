import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <head>
      <meta charset="UTF-8" />
      <title>Dan &amp; Becca's Wedding</title>

      <link
        href="https://fonts.googleapis.com/css?family=Great+Vibes|Lora|Open+Sans&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="dist/main.css" type="text/css" />

      {/* <!--    Favicon--> */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#a1c9f1" />
      <meta name="msapplication-TileColor" content="#b9d6f3" />
      <meta name="theme-color" content="#ffffff" />

      {/* <!--    Responsive--> */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <App />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
