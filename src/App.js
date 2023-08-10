import React from "react";
import {
  Header,
  ImgWrapper,
  InnerLeftHeader,
  LeftHeader,
  RightHeader,
} from "./components/Header";
import { Button } from "./components/Button";

import smallIcon from "./assets/icon-sm.svg";
import arrowLeft from "./assets/arrow-left.svg";
import ogilvy from "./assets/ogilvy-sm.svg";
import man from "./assets/man.svg";

function App() {
  return (
    <div>
      <Header>
        <LeftHeader>
          <ImgWrapper width="30" height="30">
            <img src={smallIcon} />
          </ImgWrapper>

          <InnerLeftHeader>
            <ImgWrapper width="20" height="20">
              <img src={arrowLeft} />
            </ImgWrapper>
            <span>Back to Results</span>
          </InnerLeftHeader>
        </LeftHeader>

        <div>
          <img src={ogilvy} />
        </div>

        <RightHeader>
          <Button primary>Contact Ogilvy</Button>
          <ImgWrapper rounded width="30" height="30">
            <img src={man} />
          </ImgWrapper>
        </RightHeader>
      </Header>
    </div>
  );
}

export default App;
