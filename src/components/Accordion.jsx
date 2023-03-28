import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const AccordionComponent = ({ question, initialActive = false }) => {
  const [active, setActive] = useState(initialActive);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <section className="faq_control">
      <ControlFAQ className="accordion-header">
        <div
          className={`accordion-toggle p-3 ${active ? "active" : ""}`}
          onClick={handleToggle}
        >
          <h5 className="accordion-title">{question}</h5>
          <span className="material-symbols-outlined">
            {active ? "remove" : "add"}
          </span>
        </div>
        <div className={`rc-collapse ${active ? "show" : ""}`}>
          <div className="accordion-body">
            <p>
              high-defination video is video of higher resolution and quality
              than standard definition. high-defination video is video of higher
              resolution and quality than standard definition. hbuild your
              future with our quality education. the best and largest all-in-one
              online tutoring platform in the worldd definition.
            </p>
          </div>
        </div>
      </ControlFAQ>
    </section>
  );
};

export default AccordionComponent;

let ControlFAQ = styled.div`
  border-bottom: var(--borderDefault);
  background: none;
  .accordion-title {
    font-size: 16px;
  }
  .accordion-body {
    background: none;
  }
  .accordion-header {
    margin: 0;
  }

  .accordion-toggle {
    border-bottom: 0;
    background: none;
    height: 62px;
  }
  .accordion-toggle.active {
    border-left: 0;
    background: none;
  }
`;
