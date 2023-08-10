import React from "react";
import { InfoWrapper, Wrapper } from "./styles";

function ProgressBar(props) {
  let numericValue = parseFloat(props.value);
  if (props.value.includes("M")) {
    numericValue *= 1000000; // Convert 'M' to millions
  } else if (props.value.includes("k")) {
    numericValue *= 1000; // Convert 'k' to thousands
  }
  // Assuming the total is 1.7 million (1.7M)
  const total = 1700000;

  const percentage = (numericValue / total) * 100;
  return (
    <Wrapper>
      <div class="skill-bar">
        <span
          class="skill-per"
          style={{
            width: props.hidePercentage
              ? percentage.toFixed(2) + "%"
              : props.value + "%",
          }}
        ></span>
      </div>
      <InfoWrapper isGray={props.value == "0"}>
        <h4>{props.title}</h4>
        <span>
          {props.value}
          {!props.hidePercentage && "%"}
        </span>
      </InfoWrapper>
    </Wrapper>
  );
}

export default ProgressBar;
