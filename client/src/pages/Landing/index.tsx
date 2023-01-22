import React from "react";
import { Link } from "react-router-dom";
import { spawnNotification } from "../../helpers/notifications";
import Logo from "../../assets/logo.png"
import "./index.css";

const Landing = () => {
  return (
    <div className="landing">
      <div className="wrapper">
          <img src={Logo} alt="logo"/>
          <h1>Better Me</h1>
          <p className="tagline">Empower your health journey, one step at a time</p>
          <Link to="/signin">Get Started</Link>
      </div>
    </div>
  );
};

export default Landing;
