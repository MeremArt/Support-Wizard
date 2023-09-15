import React from "react";
import { accordionData } from "./data";
import Accordion from "./Accordion";

const Faq = () => {
  return (
    <div>
      <div className="Faq-cdl">
        <h1
          className="flex items-center justify-center mx-auto w-full text-black dark:text-white"
          style={{ overflow: "hidden" }}
        >
          Have questions?
        </h1>
        <div className="accordion">
          {accordionData.map(({ title, content }, key) => (
            <Accordion key={key} title={title} content={content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
