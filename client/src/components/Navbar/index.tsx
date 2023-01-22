import React from "react";
import "./index.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="primary-nav">
        <Link to="/home">
          <img src={Logo} alt="Better Me" />
          <div>BetterMe</div>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
