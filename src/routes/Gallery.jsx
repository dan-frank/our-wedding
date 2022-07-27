import React from "react";
import "normalize.css";

import Banner from "../components/banner";
import Content from "../components/content";
import ContentCard from "../components/content/content-card";
import Nav from "../components/nav";
import Spacer from "../components/spacer";
import Video from "../components/image/video";

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
            <ContentCard
              children={
                <>
                  <Video
                    size="is-16by9"
                    videos={[
                      {
                        url: "videos/wedding.mp4",
                        type: "video/mp4",
                      },
                      {
                        url: "videos/wedding.webm",
                        type: "video/webm",
                      },
                      {
                        url: "videos/wedding.m4v",
                        type: "video/m4v",
                      },
                    ]}
                  />
                  <Spacer size={500} />
                </>
              }
            />
          </>
        }
      />
    </>
  );
};

export default GalleryRoute;
