import React from "react";
import CardUnit from "./CardUnit";
import "./CardsContainer.css";

function CardsContainer() {
  return (
    <div className="cards">
      <h1>
        NO <span className="blue">WATER</span>, NO{" "}
        <span className="green">LIFE</span>. NO{" "}
        <span className="blue">BLUE</span>, NO{" "}
        <span className="green">GREEN</span>.
      </h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-units top">
            {/** This is where we pass in the individual card units */}
            {/**With every drop of water you drink, every breath you take, you're connected to the sea. Save the Oceans, Save the Planet */}
            <CardUnit
              src={require("./images/seafood.webp")}
              text="The name of the game is hoya or eliminating seafood consumption"
              subtext="Take action now! We are urging everyone to stop eating fish and switch to alternatives from the farming and food industry. The logic is that this action will eliminate the commercial fishing industry and its detrimental impact on the oceans."
              label="Marine Conservation"
              path="/who-we-are"
            />
            <CardUnit
              src={require("./images/marine-fish-bi.jpg")}
              text="Commercial whaling is part of the problem"
              subtext="Apart from plastic pollution, whale hunting is killing whales and dolphins. In a small town in Japan called Taiji, approximately 700 dolphins and small whales are herded into a cove for slaughter every year."
              label="Marine Conservation"
              path="/who-we-are"
            />
          </ul>
          <ul className="cards-units bottom">
            {/** This is where we pass in the individual card units */}
            <CardUnit
              src={require("./images/fishing-boat.jpg")}
              text="Simple solutions are not enough, but they're a start"
              subtext="Banning plastic straws is like trying to save the Amazon rain forest by boycotting toothpicks. Lies such as 'sustainable fishing' and 'plastic straws' do more harm than good. We can't begin to save the oceans without the truth."
              label="Marine Conservation"
              path="/who-we-are"
            />
            <CardUnit
              src={require("./images/small-boat.jpg")}
              text="Overfishing is linked to diseases"
              subtext="In areas like West Africa, overfishing has resulted in pirate ships traveling at night to illegally fish. With reduced quantities of fish, many people must rely on other sources of food like bush meat. This can lead to the creation of zoonotic diseases."
              label="Marine Conservation"
              path="/who-we-are"
            />
            <CardUnit
              src={require("./images/ocean-plastic.jpg")}
              text="Awareness of overfishing is necessary"
              subtext="Commercial fishing results in the catching of up to 2.7 trillion fish every year. A consequence of this is the near-extinction of many species of the global fish population. Experts say the oceans will 'virtually be empty by 2048' if fishing continues at the current rate."
              label="Marine Conservation"
              path="/who-we-are"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsContainer;
