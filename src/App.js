import React from "react";

import "normalize.css";

import Nav from "./components/nav";
import Banner from "./components/banner";
import ContentCard from "./components/content-card";
import Spacer from "./components/spacer";
import CoupleHighlight from "./components/couple-highlight";

function App() {
  return (
    <>
      <Nav />

      <div class="main">
        <div class="content-top">
          <Banner />

          {/* <!-- Card Title--> */}
          <div class="content-card-title-container">
            <h2 class="font-serif-2 font-size-600 font-pink-200 content-card-title">
              The Happy Couple
            </h2>
          </div>

          <ContentCard
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
        </div>

        {/* <!-- Image Banner--> */}
        <div class="image-banner">
          <div class="image-shape rec-16-by-9">
            <img src="images/stairs.jpg" />
          </div>
        </div>

        <div class="content-bottom">
          {/* <!--        Message--> */}
          <div class="message">
            <div class="container-message">
              <Spacer size={600} />

              <h2 class="font-serif-1 font-size-500 font-light font-shadow font-center">
                We just want to thank everyone for coming and for supporting us
                for the start of our greatest adventure
              </h2>

              <Spacer size={600} />
            </div>
          </div>

          {/* <!--        Card Title--> */}
          <div class="content-card-title-container">
            <h2 class="font-serif-2 font-size-600 font-pink-200 content-card-title">
              Take a Second to Remember
            </h2>
          </div>

          {/* <!--        Top Card--> */}
          <div class="content-main content-card">
            <div class="container">
              <Spacer size={300} />

              <div class="page-links">
                <div class="page-link">
                  <div class="image-shape rec-4-by-3">
                    <img src="images/group1-small.jpg" />
                  </div>

                  <a class="content" href="/gallery.html">
                    <h2 class="font-serif-1 font-size-300 m-t-none m-b-sm">
                      Our Gallery
                    </h2>
                    <div class="text">
                      <p class="message font-sans-serif font-transform-none m-t-sm m-b-none">
                        A collection of our favourite images from the morning
                        all the way through to the embarrassing evening.
                      </p>
                      <i class="fal fa-long-arrow-right font-size-350"></i>
                    </div>
                  </a>
                </div>

                <div class="page-link">
                  <div class="image-shape rec-4-by-3">
                    <img src="images/venue-small.jpg" />
                  </div>
                  <a
                    class="content"
                    href="javascript:;"
                    onclick="alert('Coming Soon!');"
                  >
                    <h2 class="font-serif-1 font-size-300 m-t-none m-b-sm">
                      The Venue
                    </h2>
                    <div class="text">
                      <p class="message font-sans-serif font-transform-none m-t-sm m-b-none">
                        Walk through the halls once again. Remind yourself of
                        the castle that has stood tall and strong for over 800
                        years.
                      </p>
                      <i class="fal fa-long-arrow-right font-size-350"></i>
                    </div>
                  </a>
                </div>

                <div class="page-link">
                  <div class="image-shape rec-4-by-3">
                    <img src="images/food1-small.jpg" />
                  </div>
                  <a
                    class="content"
                    href="javascript:;"
                    onclick="alert('Coming Soon!');"
                  >
                    <h2 class="font-serif-1 font-size-300 m-t-none m-b-sm">
                      The Menu
                    </h2>
                    <div class="text">
                      <p class="message font-sans-serif font-transform-none m-t-sm m-b-none">
                        Some wonderful food was served on our special day. If
                        you’re thinking of recreating it at home, this is what
                        you ate.
                      </p>
                      <i class="fal fa-long-arrow-right font-size-350"></i>
                    </div>
                  </a>
                </div>

                <div class="page-link">
                  <div class="image-shape rec-4-by-3">
                    <img src="images/group2-small.jpg" />
                  </div>
                  <a
                    class="content"
                    href="javascript:;"
                    onclick="alert('Coming Soon!');"
                  >
                    <h2 class="font-serif-1 font-size-300 m-t-none m-b-sm">
                      The Guest List
                    </h2>
                    <div class="text">
                      <p class="message font-sans-serif font-transform-none m-t-sm m-b-none">
                        Made a once in a lifetime friend but forgot their name
                        because you had too much to drink?
                      </p>
                      <i class="fal fa-long-arrow-right font-size-350"></i>
                    </div>
                  </a>
                </div>

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
              </div>
            </div>
          </div>
        </div>
      </div>

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
    </>
  );
}

export default App;
