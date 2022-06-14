import React from "react";
import { Button } from "./Button";

function Hero() {
  return (
    <div className="hero-container">
      <video src="/videos/video-two.mp4" autoplay loop muted />
      <h1>ADVENTURE AWAITS JUST AROUND THE CORNER</h1>
      <h3>The world is yours to explore. What are you waiting for?</h3>
      <div className="button-hero">
        <Button
          className="buttons"
          buttonStyle={"button--style-two"}
          buttonSize={"button--large-size"}
        >
          LET'S GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default Hero;
