import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="report-container">
        <img
          src={require("./images/polar-bear-cub.jpg")}
          alt="Polar Bear Cub"
        />
        <h2>View our 2020 Annual Report</h2>
      </div>
      <div className="footer-signup">
        <h2 className="footer-signup-head">BECOME A WAVEMAKER</h2>
        <p className="footer-signup-text">
          Sign up today to stay connected to our efforts to save marine areas
          and get action alerts from <span>Blue</span> Planet.
        </p>

        <div className="input-fields">
          <form>
            <input
              className="input-footer"
              type={"email"}
              name="email"
              placeholder="Email Address"
            />
            <Button
              buttonStyle={"button--style-two"}
              buttonSize={"button--medium-size"}
              link=""
            >
              JOIN US
            </Button>
          </form>
        </div>
        <p className="footer-signup-subtext">
          We will not sell your personal information and you can unsubscribe at
          any time.
        </p>
      </div>
      <div className="donate-section">
        <h2>SHOW SUPPORT WITH A DONATION</h2>
        <p>
          We have already protected nearly 7 million square miles of ocean and
          innumerable sea life. But less than 3% of the ocean is effectively
          protected and there is still more to be done.
        </p>
        <Button
          buttonStyle={"button--style-two"}
          buttonSize={"button--large-size"}
          link={"support"}
        >
          Donate Here
        </Button>
      </div>
      <div className="footer-links-section">
        <div className="footer-link-unit">
          <h2>About Us</h2>
          <Link to="/">Mission</Link>
          <br />
          <Link to="/">Team</Link>
          <br />
          <Link to="/">Partners</Link>
          <br />
          <Link to="/">Work with Us</Link>
          <br />
          <Link to="/">Diversity and Inclusion</Link>
          <br />
          <Link to="/">Contact Us</Link>
          <br />
        </div>
        <div className="footer-link-unit">
          <h2>What We Do</h2>
          <Link to="/">Ocean Advocacy</Link>
          <br />
          <Link to="/">Marine Protection Atlas</Link>
          <br />
          <Link to="/">Blue Parks</Link>
          <br />
          <Link to="/">Reports and Publications</Link>
          <br />
        </div>
        <div className="footer-link-unit">
          <h2>Take Action</h2>
          <Link to="/">Demand Protection for Florida Keys</Link>
          <br />
          <Link to="/">Support Protections for Galapagos</Link>
          <br />
          <Link to="/">Support Protection of High Seas Biodiversity</Link>
          <br />
          <Link to="/">10 Things You Can Do</Link>
          <br />
          <Link to="/">Stay in Touch</Link>
          <br />
        </div>
        <div className="footer-link-unit">
          <h2>Support Us</h2>
          <Link to="/">Ways to Give</Link>
          <br />
          <Link to="/">Our Supporters</Link>
          <br />
          <Link to="/">Our Partners</Link>
          <br />
          <Link to="/">Financial Documents</Link>
          <br />
          <Link to="/">Donor Privacy Policy</Link>
          <br />
        </div>
        <div className="sponsor-section">
          <img
            className="sponsor-logo-img"
            src={require("./images/imagine-canada-logo.png")}
            alt="Sponsor logo"
          />
        </div>
        <div className="footer-social-media">
          <i class="fa-brands fa-instagram-square"></i>
          <i class="fa-brands fa-facebook-square"></i>
          <i class="fa-brands fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
