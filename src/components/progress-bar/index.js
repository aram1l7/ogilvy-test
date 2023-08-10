import React from "react";
import { InfoWrapper, Wrapper } from "./styles";

function ProgressBar(props) {
  return (
    <Wrapper>
      <div class="skill-bar">
        <span class="skill-per" style={{ width: props.value + "%" }}></span>
      </div>
      <InfoWrapper isGray={props.value == "0"}>
        <h4>{props.title}</h4>
        <span>{props.value}%</span>
      </InfoWrapper>
    </Wrapper>
  );
}

export default ProgressBar;
