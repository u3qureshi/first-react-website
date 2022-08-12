import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import WhoWeAre from "./components/pages/WhoWeAre";
import Support from "./components/pages/Support";
import WhatWeDo from "./components/pages/WhatWeDo";
import OurCampaigns from "./components/pages/OurCampaigns";
import TakeAction from "./components/pages/TakeAction";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route
            path="/who-we-are"
            element={<WhoWeAre title={"WHO WE ARE"} />}
          />
          <Route
            index
            path="/what-we-do"
            element={<WhatWeDo title={"WHAT WE DO"} />}
          />
          <Route
            index
            path="/our-campaigns"
            element={<OurCampaigns title={"OUR CAMPAIGNS"} />}
          />
          <Route
            index
            path="/take-action"
            element={<TakeAction title={"TAKE ACTION"} />}
          />
          <Route
            index
            path="/support"
            element={<Support title={"SUPPORT"} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
