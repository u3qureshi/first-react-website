import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [isClick, setClick] = useState(false);
  const [isButton, setButton] = useState(true);

  //Toggles the main menu click
  const handleMenuClick = () => setClick(!isClick);

  //Toggle the mobile menu
  const collapseMobileMenu = () => setClick(false);

  //Shows or hides the button depending on the screen size
  const showHideButton = () => {
    if (window.innerWidth <= 950) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  //Hiding the SIGN UP button on the refresh. Function only called once
  useEffect(() => {
    showHideButton();
  }, []);

  window.addEventListener("resize", showHideButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={collapseMobileMenu}>
            <span>BLUE</span> PLANET
            <i class="fa-solid fa-earth-americas"></i>
          </Link>
          <div className="main-menu-icon" onClick={handleMenuClick}>
            <i
              className={
                isClick ? "fa-solid fa-square-xmark" : "fa-solid fa-bars"
              }
            />
          </div>
          <ul className={isClick ? "nav-main-menu active" : "nav-main-menu"}>
            <li className="nav-selection">
              <Link
                to="/"
                className="nav-menu-links"
                onClick={collapseMobileMenu}
              >
                HOME
              </Link>
            </li>
            <li className="nav-selection">
              <Link
                to="/who-we-are"
                className="nav-menu-links"
                onClick={collapseMobileMenu}
              >
                WHO WE ARE
              </Link>
            </li>
            <li className="nav-selection">
              <Link
                to="/what-we-do"
                className="nav-menu-links"
                onClick={collapseMobileMenu}
              >
                WHAT WE DO
              </Link>
            </li>
            <li className="nav-selection">
              <Link
                to="/our-campaigns"
                className="nav-menu-links"
                onClick={collapseMobileMenu}
              >
                OUR CAMPAIGNS
              </Link>
            </li>
            <li className="nav-selection">
              <Link
                to="/take-action"
                className="nav-menu-links"
                onClick={collapseMobileMenu}
              >
                TAKE ACTION
              </Link>
            </li>
            <li className="nav-selection">
              <Link
                to="/support"
                className="nav-menu-links-mobile"
                onClick={collapseMobileMenu}
              >
                SUPPORT
              </Link>
            </li>
          </ul>
          {isButton && (
            <Button
              buttonStyle="button--style-two"
              buttonSize="button--medium-size"
              link={"support"}
            >
              SUPPORT
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
