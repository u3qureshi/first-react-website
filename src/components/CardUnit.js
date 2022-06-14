import React from "react";
import { Link } from "react-router-dom";

function CardUnit(props) {
  return (
    <>
      <li className="cards-unit">
        <Link to={props.path} className="cards-unit-link">
          <figure className="cards-unit-pic-wrap" data-cat={props.label}>
            <img
              src={props.src}
              alt="Ocean picture"
              className="cards-unit-img"
            />
          </figure>
          <div className="cards-unit-info">
            <h5 className="cards-unit-text">{props.text}</h5>
            <p>{props.subtext}</p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardUnit;
