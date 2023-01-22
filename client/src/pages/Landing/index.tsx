import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import MainIllustration from "../../assets/landing/main-illustration.jpg";
import BreakIcon from "../../assets/sidebar/BreakIcon.png";
import SleepIcon from "../../assets/sidebar/SleepIcon.png";
import WaterIcon from "../../assets/sidebar/WaterIcon.png";
import DashboardIcon from "../../assets/sidebar/dashboard.png";

import "./index.css";

const Landing = () => {
  return (
    <div className="landing">
      <div className="wrapper">
        <div className="top-container">
          <div className="better-me-con">
            <h1>Better Me</h1>
            <p className="tagline">
              Empower your health journey, one step at a time
            </p>
            <Link to="/signin">
              Get Started{" "}
              <i
                style={{ marginLeft: "1rem" }}
                className="fa-solid fa-arrow-right"
              ></i>
            </Link>
          </div>

          <img src={MainIllustration} width="400px" />
        </div>

        <div className="how-container">
          <h2>How?</h2>
          <div className="feature-container">
            <div className="feature">
              <img src={WaterIcon} className="feature-icon" />
              <div className="feature-name">Keeping yourself hydrated</div>
            </div>

            <div className="feature">
              <img src={SleepIcon} className="feature-icon" />
              <div className="feature-name">Getting a quality sleep</div>
            </div>

            <div className="feature">
              <img src={BreakIcon} className="feature-icon" />
              <div className="feature-name">Taking regular breaks</div>
            </div>

            <div className="feature">
              <img src={DashboardIcon} className="feature-icon" />
              <div className="feature-name">Tracking your journey</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
