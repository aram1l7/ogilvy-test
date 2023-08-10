import React, { useState } from "react";
import StyledHeader from "./components/header";
import HeroSection from "./components/hero-section";
import Tabs from "./components/tabs";
import Card from "./components/card";
import clientSize from "./assets/client-size.svg";
import industryFocus from "./assets/industry-focus.svg";
import clientLocations from "./assets/client-locations.svg";
import { CardWrapper, FlexWrapper } from "./components/common";
import {
  countryProgress,
  industryProgress,
  progress,
  socialProgress,
  tabs,
} from "./constants";
import networks from "./assets/networks.svg";
import map from "./assets/map.svg";
import chat from "./assets/chat.svg";
import { Button } from "./components/Button";
import AgencyCard from "./components/agency-card";
import operam from "./assets/operam.svg";
import lyfe from "./assets/lyfe.svg";
import bbdo from "./assets/bbdo.svg";

function App() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <>
      <StyledHeader />
      <main>
        <HeroSection />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab.title === "Summary" && (
          <section className="card-wrapper">
            <CardWrapper>
              <Card
                img={clientSize}
                title="Client Size"
                progress={progress}
                helperTitle="Nice!"
                helperDesc="Ogilvy is managing businesses of a similar size to yours."
                description="View all the business sizes this agency current manages, as well as which business size they choose to work with the most."
              />
              <Card
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
                    helperDesc="Ogilvy works with clients and client audiences in the same location as yours."
                  />
                  <div>
                    <img src={map} />
                  </div>
                </FlexWrapper>
              </Card>
            </CardWrapper>

            <CardWrapper>
              <Card
                img={networks}
                title="Networks"
                isGreen
                progress={progress}
                helperTitle="Awesome!"
                helperDesc="Ogilvy is managing networks that fit your needs."
                description="View all of the social networks this agency currently manages, as well as which networks they work with the most."
              />
              <Card
                progress={socialProgress}
                title="Account Sizes"
                isGreen
                hidePercentage
                img={clientSize}
                description="See which size social followings—and on which networks—this agency is used to managing."
                helperTitle="Great fit!"
                withIcon
                helperDesc="Ogilvy handles accounts with similar sized social followings to yours."
              />
            </CardWrapper>

            <CardWrapper>
              <Card
                img={networks}
                title="Budgets and Pricing"
                description="Here's what budgets Ogilvy works with, as well as some additional pricing info you might like to know."
              >
                <FlexWrapper
                  marginTop="40px"
                  direction="column"
                  gap="30px"
                  align="center"
                  marginBottom="55px"
                >
                  <div>
                    <img src={chat} />
                  </div>
                  <FlexWrapper
                    maxWidth="500px"
                    direction="column"
                    gap="30px"
                    align="center"
                  >
                    <span className="desc">
                      Ogilvy is a great match for your business! Get in touch
                      and feel free to ask any questions you might have.
                    </span>
                    <textarea placeholder="Hello, I'm interested in working with you on our social campaigns..."></textarea>
                  </FlexWrapper>

                  <Button primary>Contact Ogilvy</Button>
                </FlexWrapper>
              </Card>
            </CardWrapper>

            <div style={{ paddingBottom: "100px" }}>
              <FlexWrapper
                marginTop="40px"
                direction="column"
                gap="30px"
                align="center"
              >
                <div>
                  <img src={chat} />
                </div>
                <h3>Similar Agencies</h3>
                <p>
                  Discover similar agencies you might also like, before making
                  the big decision.
                </p>
              </FlexWrapper>
              <FlexWrapper
                justify="center"
                marginTop="25px"
                gap="30px"
                align="stretch"
              >
                <AgencyCard
                  img={operam}
                  title="Operam"
                  desc="Augmenting teams through tech and automation."
                />
                <AgencyCard
                  img={lyfe}
                  title="LYFE Marketing"
                  desc="A leading social media management company that helps businesses grow online. "
                />
                <AgencyCard
                  img={bbdo}
                  title="BBDO"
                  desc="BBDO is a worldwide advertising agency network, with its headquarters in New York City."
                />
              </FlexWrapper>
            </div>
          </section>
        )}
      </main>
    </>
  );
}

export default App;
