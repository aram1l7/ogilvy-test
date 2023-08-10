import React from "react";
import { HelperWrapper, ProgressWrapper, TopInfo, Wrapper } from "./styles";
import ProgressBar from "../progress-bar";
import flare from "../../assets/flare.svg";
function Card(props) {
  return (
    <Wrapper width={props.width}>
      {props.title && (
        <TopInfo>
          <div>
            <img src={props.img} />
          </div>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </TopInfo>
      )}
      {props.progress && (
        <ProgressWrapper>
          {props.progress.map((ele) => {
            return (
              <ProgressBar
                hidePercentage={props.hidePercentage}
                key={ele.id}
                title={ele.title}
                value={ele.value}
              />
            );
          })}
        </ProgressWrapper>
      )}
      {props.helperTitle && (
        <HelperWrapper isGreen={props.isGreen} withIcon={props.withIcon}>
          {props.withIcon && (
            <div>
              <img
                style={{
                  filter: props.isGreen ? "hue-rotate(266deg)" : "none",
                }}
                src={flare}
              />
            </div>
          )}
          <div>
            <h5>{props.helperTitle}</h5>
            <span>{props.helperDesc}</span>
          </div>
        </HelperWrapper>
      )}
      {props.children && props.children}
    </Wrapper>
  );
}

export default Card;
