import React from "react";
import { Description, ImageWrapper, Wrapper } from "./styles";
import mdImage from "../../assets/ogilvy-md.svg";
import { Button } from "../Button";
function HeroSection() {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={mdImage} />
      </ImageWrapper>
      <Description>
        <h2>Ogilvy</h2>
        <span>10 years · New York</span>
        <p>
          In the beginning, there was one Ogilvy, the company founded by David
          Ogilvy in 1948. Today, there is again one Ogilvy, in 83 countries and
          132 offices. We are one doorway to a creative network, re-founded to
          make brands matter in a complex, noisy, hyper-connected world.
        </p>
      </Description>
      <div>
        <Button primary>Contact Ogilvy</Button>
      </div>
    </Wrapper>
  );
}

export default HeroSection;
