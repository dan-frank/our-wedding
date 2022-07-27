import React from "react";

import "normalize.css";

import Nav from "./components/nav";
import Content from "./components/content";
import Banner from "./components/banner";
import ContentCard from "./components/content/content-card";
import Spacer from "./components/spacer";
import CoupleHighlight from "./components/couple-highlight";
import ImageBanner from "./components/banner/image";
import Message from "./components/message";
import Cards from "./components/cards";

function App() {
  return (
    <div class="main">
      <Nav />

      <Content
        position="top"
        children={
          <>
            <Banner />
            <Spacer size={200} />
            <ContentCard
              title="The Happy Couple"
              children={
                <>
                  <Spacer size={300} />
                  <CoupleHighlight
                    initials="BL"
                    image="images/becca-small.jpg"
                    title="bride"
                    name="Becca Lucas"
                    button={
                      <a href="/" class="button-whole-pink font-sans-serif">
                        The Groom
                      </a>
                    }
                  />
                  <Spacer size={500} />
                  <CoupleHighlight
                    initials="DL"
                    image="images/dan-small.jpg"
                    title="groom"
                    name="Daniel Lucas"
                  />
                </>
              }
            />
          </>
        }
      />

      <ImageBanner
        url="images/stairs.jpg"
        alt="Bride and groom walking down the stairs"
        size="is-16by9"
      />

      <Content
        position="bottom"
        children={
          <>
            <Message
              message={
                "We just want to thank everyone for coming and for supporting us for the " +
                "start of our greatest adventure"
              }
            />
            <ContentCard
              title="Take a Second to Remember"
              children={
                <>
                  <Spacer size={300} />

                  <Cards
                    size="is-4by3"
                    cards={[
                      {
                        image: {
                          url: "images/group1-small.jpg",
                          alt: "Bride, groom, groom's family and bridesmaids",
                        },
                        title: "Our Gallery",
                        text:
                          "A collection of our favourite images from the morning " +
                          "all the way through to the embarrassing evening.",
                        url: "/gallery.html",
                      },
                      {
                        image: {
                          url: "images/venue-small.jpg",
                          alt: "The entrance to farnham castle",
                        },
                        title: "The Venue",
                        text:
                          "Walk through the halls once again. Remind yourself of " +
                          "the castle that has stood tall and strong for over 800 " +
                          "years.",
                        url: "javascript:alert('Coming Soon!');",
                      },
                      {
                        image: {
                          url: "images/food1-small.jpg",
                          alt: "Picture of a desert served on the night",
                        },
                        title: "The Menu",
                        text:
                          " Some wonderful food was served on our special day. If " +
                          "you're thinking of recreating it at home, this is what " +
                          "you ate.",
                        url: "javascript:alert('Coming Soon!');",
                      },
                      {
                        image: {
                          url: "images/group2-small.jpg",
                          alt: "Bride, groom, groom's family and bridesmaids",
                        },
                        title: "The Guest List",
                        text:
                          "Made a once in a lifetime friend but forgot their name " +
                          "because you had too much to drink?",
                        url: "javascript:alert('Coming Soon!');",
                      },
                    ]}
                  />
                  <Spacer size={300} />

                  <div class="footer">
                    <p class="font-sans-serif m-y-none">
                      Designed and developed by Daniel Lucas
                    </p>

                    <p class="font-sans-serif m-y-none">
                      Download from{" "}
                      <a
                        href="https://github.com/dan-frank/our_wedding"
                        target="_blank"
                        class="button-link"
                      >
                        <i class="fab fa-github"></i> GitHub
                      </a>
                    </p>
                  </div>
                </>
              }
            />
          </>
        }
      />

      <div id="popup-video" class="popup">
        <div class="popup-content">
          <div class="image-shape rec-16-by-9">
            <video id="weddingVideo" controls>
              <source src="videos/wedding.mp4" type="video/mp4" />
              <source src="videos/wedding.webm" type="video/webm" />
              <source src="videos/wedding.m4v" type="video/m4v" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
