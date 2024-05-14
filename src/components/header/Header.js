import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="logo">
        Portfolio.
      </a>

      <nav className="navbar">
        <a href="#" style="--i:1" className="active">
          Home
        </a>
        <a href="#" style="--i:2">
          About
        </a>
        <a href="#" style="--i:3">
          Skills
        </a>
        <a href="#" style="--i:4">
          Portfolio
        </a>
        <a href="#" style="--i:5">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
