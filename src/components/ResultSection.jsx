import React from "react";
import "./ResultSection.scss";

const ResultSection = ({ howToText }) => {
  return (
    <section className="second-section">
      <div className="box-text">
        <p>{howToText}</p>
      </div>
    </section>
  );
};

export default ResultSection;
