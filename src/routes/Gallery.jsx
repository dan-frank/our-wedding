import React from "react";

import Banner from "../components/banner";
import Content from "../components/content";
import ContentCard from "../components/content/content-card";
import Nav from "../components/nav";
import Spacer from "../components/spacer";
import Video from "../components/image/video";
import Gallery from "../components/gallery";
import Footer from "../components/footer";

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
                  <Spacer size={300} />
                  <Gallery
                    size="is-3by4"
                    images={[
                      {
                        url: "images/gallery/1-pre-ceremony/100-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/1-pre-ceremony/100.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/1-pre-ceremony/200-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/1-pre-ceremony/200.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/1-pre-ceremony/300-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/1-pre-ceremony/300.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/1-pre-ceremony/400-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/1-pre-ceremony/400.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/1-pre-ceremony/500-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/1-pre-ceremony/500.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/1-pre-ceremony/650-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/1-pre-ceremony/650.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/1-pre-ceremony/600-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/1-pre-ceremony/600.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/1-pre-ceremony/700-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/1-pre-ceremony/700.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/1-pre-ceremony/800-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/1-pre-ceremony/800.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/1-pre-ceremony/900-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/1-pre-ceremony/900.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/1-pre-ceremony/1000-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/1-pre-ceremony/1000.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/1-pre-ceremony/1100-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/1-pre-ceremony/1100.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/1-pre-ceremony/1200-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/1-pre-ceremony/1200.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/1-pre-ceremony/1300-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/1-pre-ceremony/1300.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/1-pre-ceremony/1400-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/1-pre-ceremony/1400.jpg",
                          group: "wedding",
                        },
                      },
                    ]}
                  />
                  <Spacer size={300} />
                  <Gallery
                    size="is-3by4"
                    images={[
                      {
                        url: "images/gallery/2-ceremony/100-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/2-ceremony/100.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/2-ceremony/200-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/2-ceremony/200.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/2-ceremony/300-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/2-ceremony/300.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/2-ceremony/400-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/2-ceremony/400.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/2-ceremony/500-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/2-ceremony/500.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/2-ceremony/600-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/2-ceremony/600.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/2-ceremony/700-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/2-ceremony/700.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/2-ceremony/800-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/2-ceremony/800.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/2-ceremony/900-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/2-ceremony/900.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/2-ceremony/1000-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/2-ceremony/1000.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/2-ceremony/1100-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/2-ceremony/1100.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/2-ceremony/1120-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/2-ceremony/1120.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/2-ceremony/1140-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/2-ceremony/1140.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/2-ceremony/1160-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/2-ceremony/1160.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/2-ceremony/1200-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/2-ceremony/1200.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/2-ceremony/1300-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/2-ceremony/1300.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/2-ceremony/1400-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/2-ceremony/1400.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/2-ceremony/1500-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/2-ceremony/1500.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/2-ceremony/1600-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/2-ceremony/1600.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/2-ceremony/1700-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/2-ceremony/1700.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/2-ceremony/1800-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/2-ceremony/1800.jpg",
                          group: "wedding",
                        },
                      },
                      // { url: "images/gallery/2-ceremony/1900-small.jpg", alt: "", lightbox: { url: "images/gallery/2-ceremony/1900.jpg", group: "wedding" } },
                    ]}
                  />
                  <Spacer size={300} />
                  <Gallery
                    size="is-3by4"
                    images={[
                      {
                        url: "images/gallery/3-intermission/100-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/100.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/130-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/130.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/160-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/160.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/200-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/200.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/300-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/300.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/400-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/400.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/500-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/500.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/600-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/600.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/700-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/700.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/800-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/800.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/900-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/900.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/1000-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/1000.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/1100-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/1100.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/1200-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/1200.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/1300-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/1300.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/1400-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/1400.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/1500-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/1500.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/1600-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/1600.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/1700-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/1700.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/1800-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/1800.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/1900-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/1900.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/2000-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/2000.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/2100-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/2100.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/2200-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/2200.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/2300-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/2300.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/2400-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/2400.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/2500-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/2500.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/2600-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/2600.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/2700-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/2700.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/2800-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/2800.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/2900-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/2900.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/3000-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/3000.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/3100-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/3100.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/3200-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/3200.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/3300-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/3300.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/3400-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/3400.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/3500-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/3500.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/3600-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/3600.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/3700-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/3700.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/3800-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/3800.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/3900-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/3900.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/4000-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/4000.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/4100-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/4100.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/4200-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/4200.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/4300-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/4300.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/4400-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/4400.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/4500-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/4500.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/4600-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/4600.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/4700-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/4700.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/4800-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/4800.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/4900-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/4900.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/5000-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/5000.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/5100-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/5100.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/5130-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/5130.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/5160-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/5160.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/5200-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/5200.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/5300-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/5300.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/5400-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/5400.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/5500-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/5500.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/5600-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/5600.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/5700-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/5700.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/5800-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/5800.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/5900-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/5900.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/3-intermission/6000-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/3-intermission/6000.jpg",
                          group: "wedding",
                        },
                      },
                    ]}
                  />
                  <Spacer size={300} />
                  <Gallery
                    size="is-3by4"
                    images={[
                      {
                        url: "images/gallery/4-wedding-breakfast/100-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/4-wedding-breakfast/100.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/4-wedding-breakfast/125-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/4-wedding-breakfast/125.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/4-wedding-breakfast/150-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/4-wedding-breakfast/150.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/4-wedding-breakfast/175-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/4-wedding-breakfast/175.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/4-wedding-breakfast/200-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/4-wedding-breakfast/200.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/4-wedding-breakfast/300-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/4-wedding-breakfast/300.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/4-wedding-breakfast/400-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/4-wedding-breakfast/400.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/4-wedding-breakfast/500-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/4-wedding-breakfast/500.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/4-wedding-breakfast/600-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/4-wedding-breakfast/600.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/4-wedding-breakfast/700-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/4-wedding-breakfast/700.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/4-wedding-breakfast/800-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/4-wedding-breakfast/800.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/4-wedding-breakfast/900-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/4-wedding-breakfast/900.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/4-wedding-breakfast/1000-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/4-wedding-breakfast/1000.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/4-wedding-breakfast/1100-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/4-wedding-breakfast/1100.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/4-wedding-breakfast/1200-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/4-wedding-breakfast/1200.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/4-wedding-breakfast/1300-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/4-wedding-breakfast/1300.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/4-wedding-breakfast/1400-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/4-wedding-breakfast/1400.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/4-wedding-breakfast/1500-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/4-wedding-breakfast/1500.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/4-wedding-breakfast/1600-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/4-wedding-breakfast/1600.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/4-wedding-breakfast/1700-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/4-wedding-breakfast/1700.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/4-wedding-breakfast/1800-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/4-wedding-breakfast/1800.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/4-wedding-breakfast/1900-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/4-wedding-breakfast/1900.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/4-wedding-breakfast/2000-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/4-wedding-breakfast/2000.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/4-wedding-breakfast/2100-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/4-wedding-breakfast/2100.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/4-wedding-breakfast/2200-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/4-wedding-breakfast/2200.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/4-wedding-breakfast/2300-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/4-wedding-breakfast/2300.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/4-wedding-breakfast/2400-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/4-wedding-breakfast/2400.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/4-wedding-breakfast/2500-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/4-wedding-breakfast/2500.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/4-wedding-breakfast/2600-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/4-wedding-breakfast/2600.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/4-wedding-breakfast/2700-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/4-wedding-breakfast/2700.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/4-wedding-breakfast/2750-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/4-wedding-breakfast/2750.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/4-wedding-breakfast/2800-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/4-wedding-breakfast/2800.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/4-wedding-breakfast/2900-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/4-wedding-breakfast/2900.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/4-wedding-breakfast/3000-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/4-wedding-breakfast/3000.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/4-wedding-breakfast/3100-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/4-wedding-breakfast/3100.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/4-wedding-breakfast/3200-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/4-wedding-breakfast/3200.jpg",
                          group: "wedding",
                        },
                      },
                    ]}
                  />
                  <Spacer size={300} />
                  <Gallery
                    size="is-3by4"
                    images={[
                      {
                        url: "images/gallery/5-party/50-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/50.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/100-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/100.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/150-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/150.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/200-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/200.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/300-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/300.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/400-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/400.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/450-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/450.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/500-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/500.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/520-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/520.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/540-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/540.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/560-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/560.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/580-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/580.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/600-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/600.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/700-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/700.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/800-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/800.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/850-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/850.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/900-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/900.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/1000-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/1000.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/1100-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/1100.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/1200-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/1200.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/1300-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/1300.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/1400-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/1400.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/1500-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/1500.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/1600-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/1600.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/1725-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/1725.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/1750-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/1750.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/1775-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/1775.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/1700-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/1700.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/1800-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/1800.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/1850-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/1850.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/1900-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/1900.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/2000-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/2000.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/2100-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/2100.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/2200-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/2200.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/2300-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/2300.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/2350-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/2350.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/2400-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/2400.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/2500-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/2500.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/2600-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/2600.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/2650-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/2650.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/2700-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/2700.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/2800-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/2800.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/2900-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/2900.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/3000-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/3000.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/3100-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/3100.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/3200-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/3200.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/3300-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/3300.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/3400-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/3400.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/3500-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/3500.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/3600-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/3600.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/3700-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/3700.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/3800-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/3800.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/3900-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/3900.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/5-party/4000-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/5-party/4000.jpg",
                          group: "wedding",
                        },
                      },
                    ]}
                  />
                  <Spacer size={300} />
                  <Gallery
                    size="is-3by4"
                    images={[
                      {
                        url: "images/gallery/6-next-day/100-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/6-next-day/100.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/6-next-day/200-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/6-next-day/200.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/6-next-day/300-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/6-next-day/300.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/6-next-day/400-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/6-next-day/400.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/6-next-day/500-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/6-next-day/500.jpg",
                          group: "wedding",
                        },
                      },
                      {
                        url: "images/gallery/6-next-day/600-small.jpg",
                        alt: "",
                        lightbox: {
                          url: "images/gallery/6-next-day/600.jpg",
                          group: "wedding",
                        },
                      },
                    ]}
                  />
                  <Spacer size={300} />
                  <Footer />
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
