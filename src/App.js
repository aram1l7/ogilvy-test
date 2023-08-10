import React from "react";
import StyledHeader from "./components/header";
import HeroSection from "./components/hero-section";
import Tabs from "./components/tabs";

function App() {
  return (
    <>
      <StyledHeader />
      <main>
        <HeroSection />
        <Tabs />
      </main>
    </>
  );
}

export default App;
