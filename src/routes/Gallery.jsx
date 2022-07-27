import React from "react";
import "normalize.css";

import Nav from "../components/nav";
import Banner from "../components/banner";
import Content from "../components/content";

const GalleryRoute = () => {
  return (
    <>
      <Nav />
      <Content
        position="top"
        children={
          <>
            <Banner
              image={{
                url: "images/cheers-small.jpg",
                alt: "Bride and groom cheers",
              }}
              title="A Gallery Of Memories"
            />
          </>
        }
      />
    </>
  );
};

export default GalleryRoute;
