import React from "react";
import "./index.css";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="primary-nav">
        <div>
          <img src={Logo} alt="Better Me" />
          <div>BetterMe</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
