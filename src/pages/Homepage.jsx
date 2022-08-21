import React from "react";
import { useState } from "react";
import HowToInput from "../components/HowToInput";
import ResultSection from "../components/ResultSection";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";
import "./Homepage.scss";
import About from "../components/About";
import { IoMdCloseCircle } from "react-icons/io";

const Homepage = () => {
  const [generatedText, setGeneratedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAbout, setIsAbout] = useState(false);

  const toggleAbout = () => {
    setIsAbout(!isAbout);
  };

  return (
    <div className="homepage">
      <aside>
        <div>
          <p>CULTURAL PRACTICES EXPLAINED BY AI.</p>
        </div>
      </aside>
      <div className="main-container">
        <header>
          {!isAbout ? (
            <button
              onClick={toggleAbout}
              className="info-button fixed fire-cursor"
            >
              ABOUT
            </button>
          ) : (
            <button className="close-btn" onClick={toggleAbout}>
              {/* <IconContext.Provider
                value={{ color: "blue", className: "global-class-name" }}
              > */}
              <IoMdCloseCircle style={{ fontSize: "2em" }} />
              {/* </IconContext.Provider> */}
            </button>
          )}
        </header>

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
    </div>
  );
};

export default Homepage;
