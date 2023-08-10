import React, { useState } from "react";
import { Tab, Wrapper } from "./styles";
import { tabs } from "../../constants";

function Tabs(props) {
  return (
    <Wrapper>
      {tabs.map((ele) => {
        return (
          <Tab
            onClick={() => {
              if (ele.id !== props.activeTab.id) {
                props.setActiveTab(ele);
              }
            }}
            active={ele.id === props.activeTab.id}
            key={ele.id}
          >
            {ele.title}
          </Tab>
        );
      })}
    </Wrapper>
  );
}

export default Tabs;
