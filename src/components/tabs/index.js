import React, { useState } from "react";
import { Tab, Wrapper } from "./styles";

const tabs = [
  {
    id: 1,
    title: "Summary",
  },
  {
    id: 2,
    title: "Performance",
  },
  {
    id: 3,
    title: "Portfolio",
  },
  {
    id: 4,
    title: "Reviews",
  },
  {
    id: 5,
    title: "Latest",
  },
];

function Tabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <Wrapper>
      {tabs.map((ele) => {
        return (
          <Tab
            onClick={() => {
              if (ele.id !== activeTab.id) {
                setActiveTab(ele);
              }
            }}
            active={ele.id === activeTab.id}
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
