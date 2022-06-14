import "../../App.css";
import Hero from "../Hero";
import React from "react";
import CardsContainer from "../CardsContainer";

function Home() {
  return (
    <>
      <Hero />
      <CardsContainer className="card-container-main-class" />
    </>
  );
}

export default Home;
