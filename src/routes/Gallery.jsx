import React from "react";
import "normalize.css";

import Banner from "../components/banner";
import Content from "../components/content";
import ContentCard from "../components/content/content-card";
import Nav from "../components/nav";
import Spacer from "../components/spacer";
import Video from "../components/image/video";
import Gallery from "../components/gallery";

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
                  <Gallery
                    size="is-3by4"
                    images={[
                      {
                        url: "images/gallery/1-pre-ceremony/100.jpeg",
                        alt: "",
                      },
                      {
                        url: "images/gallery/1-pre-ceremony/200.jpeg",
                        alt: "",
                      },
                      {
                        url: "images/gallery/1-pre-ceremony/300.jpeg",
                        alt: "",
                      },
                      { url: "images/gallery/1-pre-ceremony/400.JPG", alt: "" },
                      { url: "images/gallery/1-pre-ceremony/500.jpg", alt: "" },
                      { url: "images/gallery/1-pre-ceremony/650.jpg", alt: "" },
                      {
                        url: "images/gallery/1-pre-ceremony/600.jpeg",
                        alt: "",
                      },
                      { url: "images/gallery/1-pre-ceremony/700.JPG", alt: "" },
                      {
                        url: "images/gallery/1-pre-ceremony/800.jpeg",
                        alt: "",
                      },
                      { url: "images/gallery/1-pre-ceremony/900.jpg", alt: "" },
                      {
                        url: "images/gallery/1-pre-ceremony/1000.jpg",
                        alt: "",
                      },
                      {
                        url: "images/gallery/1-pre-ceremony/1100.jpg",
                        alt: "",
                      },
                      {
                        url: "images/gallery/1-pre-ceremony/1200.jpg",
                        alt: "",
                      },
                      {
                        url: "images/gallery/1-pre-ceremony/1300.jpg",
                        alt: "",
                      },
                      {
                        url: "images/gallery/1-pre-ceremony/1400.jpg",
                        alt: "",
                      },
                    ]}
                  />
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
