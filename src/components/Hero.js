import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>SAVE THE OCEANS</h1>
        <h3>
          The oceans are home for up to 80% of all life on Earth. If the ocean
          dies, so do we.
        </h3>
        <div className="button-hero">
          <Button
            className="buttons"
            buttonStyle={"button--style-two"}
            buttonSize={"button--large-size"}
            link={"take-action"}
          >
            LET'S GET STARTED!
          </Button>
          <Button
            className="buttons"
            buttonStyle={"button--style-one"}
            buttonSize={"button--large-size"}
            link="who-we-are"
          >
            WATCH PROMO <i class="fa-solid fa-circle-play" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
