import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import "./Header.scss";

const Header = () => {
  const location = useLocation();
  const [page, setPage] = useState("");
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const setActiveClass = () => {
      let currentPage = location.pathname;
      if (currentPage === "/") {
        setPage("home");
      }
      if (currentPage.includes("/about")) {
        setPage("about");
      }
      if (currentPage.includes("/skills")) {
        setPage("skills");
      }
      if (currentPage.includes("/certifications")) {
        setPage("certifications");
      }
      if (currentPage.includes("/projects")) {
        setPage("projects");
      }
      if (currentPage.includes("/contact")) {
        setPage("contact");
      }
    };
    setActiveClass();
  }, [location]);

  return (
    <header className="header">
      <a href="#" className="logo">
        Huy Tran.
      </a>

      <button
        type="button"
        className="navbar-toggler-btn"
        onClick={handleNavbar}
      >
        <HiOutlineMenuAlt3
          size={35}
          style={{
            color: `${toggleMenu ? "#010101" : "#fff"}`,
          }}
        />
      </button>

      <nav className={toggleMenu ? "navbar show-navbar-collapse" : "navbar"}>
        <ul className="navbar-nav">
          <Link
            to="/"
            className={`${page === "home" ? "active" : ""} nav-link`}
            style={{ "--i": 1 }}
          >
            Home
          </Link>
          <Link
            to="about"
            className={`${page === "about" ? "active" : ""} nav-link`}
            style={{ "--i": 2 }}
          >
            About
          </Link>
          <Link
            to="skills"
            className={`${page === "skills" ? "active" : ""} nav-link`}
            style={{ "--i": 3 }}
          >
            Skills
          </Link>
          <Link
            to=" certifications"
            className={`${page === " certifications" ? "active" : ""} nav-link`}
            style={{ "--i": 4 }}
          >
            Certifications
          </Link>
          <Link
            to="projects"
            className={`${page === "projects" ? "active" : ""} nav-link`}
            style={{ "--i": 5 }}
          >
            Projects
          </Link>
          <Link
            to="contact"
            className={`${page === "contact" ? "active" : ""} nav-link`}
            style={{ "--i": 6 }}
          >
            Contact
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
