import React from "react";

import Button from "../components/button";
import Banner from "../components/banner";
import Cards from "../components/cards";
import Content from "../components/content";
import ContentCard from "../components/content/content-card";
import CoupleHighlight from "../components/couple-highlight";
import Footer from "../components/footer";
import ImageBanner from "../components/banner/image";
import Message from "../components/message";
import Spacer from "../components/spacer";

const HomeRoute = () => {
  return (
    <>
      <Content
        position="top"
        children={
          <>
            <Banner
              image={{
                url: process.env.PUBLIC_URL + "/images/kiss-small.jpg",
                alt: "Bride and groom kiss",
              }}
              title="The Perfect Day"
            />
            <Spacer size={200} />
            <ContentCard
              title="The Happy Couple"
              children={
                <>
                  <Spacer size={300} />
                  <CoupleHighlight
                    initials="BL"
                    image={process.env.PUBLIC_URL + "/images/becca-small.jpg"}
                    title="bride"
                    name="Becca Lucas"
                    button={
                      <Button
                        text="The Groom"
                        url="/"
                        modifiers="button button--secondary"
                      />
                    }
                  />
                  <Spacer size={500} />
                  <CoupleHighlight
                    initials="DL"
                    image={process.env.PUBLIC_URL + "/images/dan-small.jpg"}
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
        url={process.env.PUBLIC_URL + "/images/stairs.jpg"}
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
                          url:
                            process.env.PUBLIC_URL + "/images/group1-small.jpg",
                          alt: "Bride, groom, groom's family and bridesmaids",
                        },
                        title: "Our Gallery",
                        text:
                          "A collection of our favourite images from the morning " +
                          "all the way through to the embarrassing evening.",
                        url: "/gallery",
                      },
                      {
                        image: {
                          url:
                            process.env.PUBLIC_URL + "/images/venue-small.jpg",
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
                          url:
                            process.env.PUBLIC_URL + "/images/food1-small.jpg",
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
                          url:
                            process.env.PUBLIC_URL + "/images/group2-small.jpg",
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

export default HomeRoute;
