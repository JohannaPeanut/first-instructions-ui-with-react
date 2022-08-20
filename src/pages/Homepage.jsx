import React from "react";
import { useState } from "react";
import HowToInput from "../components/HowToInput";
import ResultSection from "../components/ResultSection";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";
import "./Homepage.scss";
import About from "../components/About";

const Homepage = () => {
  const [generatedText, setGeneratedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAbout, setIsAbout] = useState(false);

  const toggleAbout = () => {
    setIsAbout(!isAbout);
  };

  return (
    <div className="homepage">
      <header>
        {!isAbout ? (
          <button
            onClick={toggleAbout}
            className="info-button fixed fire-cursor"
          >
            ABOUT
          </button>
        ) : (
          <button onClick={toggleAbout}>X</button>
        )}
      </header>
      <aside>
        <div>
          <p>CULTURAL PRACTICES EXPLAINED BY AI.</p>
        </div>
      </aside>
      {isAbout ? (
        <About />
      ) : (
        <>
          <HowToInput
            changeLoading={setIsLoading}
            isLoading={isLoading}
            setHowToText={setGeneratedText}
          />
          {isLoading ? (
            <Spinner />
          ) : (
            generatedText && <ResultSection howToText={generatedText} />
          )}
        </>
      )}
      <Footer />
    </div>
  );
};

export default Homepage;
