import React from "react";
import axios from "axios";
import { useState } from "react";
import { getHowToText } from "./../services/how.js";
import "./HowToInput.scss";

const HowToInput = ({ setHowToText, changeLoading, isLoading }) => {
  const [inputTerm, setInputTerm] = useState("");
  const [length, setLength] = useState(312);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!isLoading) {
      changeLoading(true);
      getHowToText(inputTerm, length).then((data) => {
        setHowToText(data);
        changeLoading(false);
      });
    }
  };

  return (
    <section className="first-section">
      <div className="big-input-div">
        <form onSubmit={(event) => handleFormSubmit(event)}>
          <span>How to </span>
          <input
            onChange={(event) => {
              setInputTerm(event.target.value);
            }}
            placeholder="..."
            type="text"
            className="fire-cursor"
            value={inputTerm}
            autoFocus
          />
          {/* <div className="range-div">
            <input
              type="range"
              id="length"
              name="length"
              min="24"
              max="600"
              list="tickmarks"
              class="range"
            />
            <span className="labelRangeInput"> 312 </span>
            <span className="labelRangeInput" id="label-no-margin">
              {" "}
              words{" "}
            </span>
          </div> */}
          {/* <input type="button" /> */}
          <button className="ask-button">ASK</button>
        </form>
      </div>
    </section>
  );
};

export default HowToInput;
