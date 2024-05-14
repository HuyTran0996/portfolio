import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="logo">
        Huy Tran.
      </a>

      <nav className="navbar">
        <a href="#" className="active" style={{ "--i": 1 }}>
          Home
        </a>
        <a href="#" style={{ "--i": 2 }}>
          About
        </a>
        <a href="#" style={{ "--i": 3 }}>
          Skills
        </a>
        <a href="#" style={{ "--i": 4 }}>
          Portfolio
        </a>
        <a href="#" style={{ "--i": 5 }}>
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
