import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <button
        onClick={() =>
          alert(
            "Unfortunately our messaging function is currently under construction - contact details on github 👇"
          )
        }
        className="feedback-button rotate15 fire-cursor"
      >
        FEEDBACK
      </button>

      <button className="imprint-button fire-cursor">
        <a
          href="https://github.com/plasticfruits/gpt2-fine-tunning-pytorch"
          target="_blank"
          className=" btn no-outline"
          rel="noreferrer"
        >
          GITHUB
        </a>
      </button>
    </footer>
  );
};

export default Footer;
