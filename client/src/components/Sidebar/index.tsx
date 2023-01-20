import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import BreakIcon from "../../assets/sidebar/BreakIcon.png";
import HomeIcon from "../../assets/sidebar/HomeIcon.png";
import SleepIcon from "../../assets/sidebar/SleepIcon.png";
import WaterIcon from "../../assets/sidebar/WaterIcon.png";
import SignoutIcon from "../../assets/sidebar/SignoutIcon.png";
import { useLogout } from "../../hooks/useLogout";

const Sidebar = () => {
  const { logout, isPending } = useLogout();

  return (
    <div className="sidebar">
      <div className="link-wrapper">
        <ul>
          <li>
            <img src={HomeIcon} alt="" />
            <Link to="/home">Home</Link>
          </li>
          <li>
            <img src={WaterIcon} alt="" />
            <Link to="/WaterHabits">Water Habits</Link>
          </li>
          <li>
            <img src={SleepIcon} alt="" />
            <Link to="/SleepHabits">Sleep Habits</Link>
          </li>
          <li>
            <img src={BreakIcon} alt="" />
            <Link to="/BreakHabits">Break Habits</Link>
          </li>
          <li onClick={logout}>
            <img src={SignoutIcon} alt="" />
            <button>Sign out</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
