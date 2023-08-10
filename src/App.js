import React from "react";
import StyledHeader from "./components/header";
import HeroSection from "./components/hero-section";
import Tabs from "./components/tabs";
import Card from "./components/card";
import clientSize from "./assets/client-size.svg";

const progress = [
  {
    id: 1,
    title: "Small Business (Less than $1M in revenue)",
    value: "0",
  },
  {
    id: 2,
    title: "Medium Business ($1M-$10M)",
    value: "10",
  },
  {
    id: 3,
    title: "Large Business ($10M-$1B)",
    value: "60",
  },
  { id: 4, title: "Enterprise ($1B+)", value: "20" },
];

function App() {
  return (
    <>
      <StyledHeader />
      <main>
        <HeroSection />
        <Tabs />
        <div>
          <Card
            width="580px"
            img={clientSize}
            title="Client Size"
            progress={progress}
            helperTitle="Nice!"
            helperDesc="Ogilvy is managing businesses of a similar size to yours."
            description="View all the business sizes this agency current manages, as well as which business size they choose to work with the most."
          />
        </div>
      </main>
    </>
  );
}

export default App;
