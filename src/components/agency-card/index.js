import React from "react";
import { BtnWrapper, InnerWrapper, Wrapper } from "./styles";
import arrowRight from "../../assets/arrow-right.svg";
function AgencyCard(props) {
  return (
    <Wrapper>
      <div>
        <img src={props.img} />
      </div>
      <InnerWrapper>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        <BtnWrapper>
          <span>OPEN</span>
          <img src={arrowRight} />
        </BtnWrapper>
      </InnerWrapper>
    </Wrapper>
  );
}

export default AgencyCard;
