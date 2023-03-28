import React, { useState } from "react";
import styled from "styled-components";

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 820px;
  width: 100%;
  overflow: auto;
  margin: 40px auto;
  padding: 10px 0;
`;

const TabButton = styled.button`
  background-color: ${(props) =>
    props.active ? "var(--White)" : "transparent"};
  color: ${(props) => (props.active ? "var(--Global)" : "#A1A1A1")};

  border: none;
  border-radius: 4px;
  margin: 0 10px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
`;

export const Tabs = ({ labels, onChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
    onChange(labels[index]);
  };

  return (
    <TabContainer className="container">
      {labels.map((label, index) => (
        <TabButton
          key={index}
          active={index === activeIndex}
          onClick={() => handleClick(index)}
        >
          {label}
        </TabButton>
      ))}
    </TabContainer>
  );
};
