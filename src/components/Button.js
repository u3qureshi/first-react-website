// Reusable button across the website
import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const stylesArray = ["button--style-one", "button--style-two"];

const sizesArray = ["button--medium-size", "button--large-size"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  link,
}) => {
  const checkButtonStyle = stylesArray.includes(buttonStyle)
    ? buttonStyle
    : stylesArray[0];

  const checkButtonSize = sizesArray.includes(buttonSize)
    ? buttonSize
    : sizesArray[0];
  link = "/" + link;

  return (
    <Link to={link} className="button-mobile">
      <button
        className={`button ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
