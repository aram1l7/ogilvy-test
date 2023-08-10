import React from "react";
import { HelperWrapper, ProgressWrapper, TopInfo, Wrapper } from "./styles";
import ProgressBar from "../progress-bar";

function Card(props) {
  return (
    <Wrapper width={props.width}>
      <TopInfo>
        <div>
          <img src={props.img} />
        </div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </TopInfo>
      <ProgressWrapper>
        {props.progress.map((ele) => {
          return (
            <ProgressBar key={ele.id} title={ele.title} value={ele.value} />
          );
        })}
      </ProgressWrapper>
      <HelperWrapper>
        <h5>{props.helperTitle}</h5>
        <span>{props.helperDesc}</span>
      </HelperWrapper>
    </Wrapper>
  );
}

export default Card;
