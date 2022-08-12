import React from "react";
import "./UnderConstruction.css";

function OurCampaigns(props) {
  return (
    <div className="under-construction-container">
      <div className="under-construction-content">
        <h1>{props.title}</h1>
        <h2>COMING SOON</h2>
        <p>We're coming soon! Stay tuned!</p>
        <img src={require("../images/paint-brush.png")} alt="Paint brush" />
      </div>
    </div>
  );
}

export default OurCampaigns;
