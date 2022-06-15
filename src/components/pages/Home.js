import "../../App.css";
import Hero from "../Hero";
import React from "react";
import CardsContainer from "../CardsContainer";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <Hero />
      <CardsContainer className="card-container-main-class" />
      <Footer />
    </>
  );
}

export default Home;
