import React from "react";
import StyledHeader from "./components/header";
import HeroSection from "./components/hero-section";
import Tabs from "./components/tabs";
import Card from "./components/card";
import clientSize from "./assets/client-size.svg";
import industryFocus from "./assets/industry-focus.svg";
import clientLocations from "./assets/client-locations.svg";
import { CardWrapper, FlexWrapper } from "./components/common";
import { countryProgress, industryProgress, progress } from "./constants";
import map from "./assets/map.svg";
function App() {
  return (
    <>
      <StyledHeader />
      <main>
        <HeroSection />
        <Tabs />
        <CardWrapper>
          <Card
            width="580px"
            img={clientSize}
            title="Client Size"
            progress={progress}
            helperTitle="Nice!"
            helperDesc="Ogilvy is managing businesses of a similar size to yours."
            description="View all the business sizes this agency current manages, as well as which business size they choose to work with the most."
          />
          <Card
            width="580px"
            progress={industryProgress}
            title="Industry Focus"
            img={industryFocus}
            description="See which industries this agency has the most experience and expertise in."
            helperTitle="Things are looking good!"
            withIcon
            helperDesc="Ogilvy has experience working with the same type of business as yours."
          />
        </CardWrapper>
        <CardWrapper>
          <Card
            img={clientLocations}
            title="Client locations"
            description="Check out where Ogilvy's clients are based thorough the world."
          >
            <FlexWrapper gap="30px" align="center">
              <Card
                progress={countryProgress}
                helperTitle="Well would you look at that!"
                width="580px"
                helperDesc="Ogilvy works with clients and client audiences in the same location as yours."
              />
              <div>
                <img src={map} />
              </div>
            </FlexWrapper>
          </Card>
        </CardWrapper>
      </main>
    </>
  );
}

export default App;
