import React from "react";

const ResultSection = ({ howToText }) => {
  return (
    <section className="second-section">
      <div className="tutorial-text">
        <p className="tutorial-paragraph">{howToText}</p>
      </div>
    </section>
  );
};

export default ResultSection;
