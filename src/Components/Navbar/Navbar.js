import React from "react";
import logo from "../../assets/logo.png";
import Services from "../Services/Services";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="links">
        <ul>
          <li>
            <a href="/"> Home</a>
          </li>
          <li>
            <a href="/"> About</a>
          </li>
          <li>
            <a href="/Services"> Services</a>
          </li>
          <li>
            <a href="/"> Portfolio</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
