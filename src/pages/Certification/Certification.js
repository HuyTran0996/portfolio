import React from "react";

import javascript from "../../assets/certifications/javascript.jpg";
import responsive from "../../assets/certifications/responsive.jpg";
import coderschool from "../../assets/certifications/coderschool.jpg";
import expressjs from "../../assets/certifications/expressjs.jpg";
import react from "../../assets/certifications/react.jpg";
import mongodb from "../../assets/certifications/mongodb.jpg";

import coderschoollogo from "../../assets/certifications/coderschoollogo.png";
import { SiUdemy } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaFreeCodeCamp } from "react-icons/fa";
import "./Certification.scss";

const Skill = () => {
  const techs = [
    {
      id: 1,
      src: javascript,
      title: "JavaScript Algorithms and Data Structures ",
      style: "orange",
      logo: "freecodecamp",
      link: "https://freecodecamp.org/certification/fcc9fbcafd3-f9ae-4367-a1c2-21475684cfe8/javascript-algorithms-and-data-structures-v8",
    },
    {
      id: 2,
      src: responsive,
      title: "Responsice Web Design",
      style: "blue",
      logo: "freecodecamp",
      link: "https://freecodecamp.org/certification/fcc9fbcafd3-f9ae-4367-a1c2-21475684cfe8/responsive-web-design",
    },
    {
      id: 3,
      src: coderschool,
      title: "Full Stack Web Development",
      style: "red",
      logo: "coderschool",
      link: "https://mycourse.app/4XJS7qUush3YVNbp8",
    },
    {
      id: 4,
      src: expressjs,
      title: "Nodejs, Express, MongoDB",
      style: "green",
      logo: "udemy",
      link: "https://udemy-certificate.s3.amazonaws.com/image/UC-bbc736c0-5970-4e7a-a576-40ad253a090f.jpg",
    },
    {
      id: 5,
      src: react,
      title: "Mordern React With Redux",
      style: "sky",
      logo: "udemy",
      link: "https://udemy-certificate.s3.amazonaws.com/image/UC-2473f566-5d87-4c63-a1f9-238a3c082dc4.jpg",
    },
    {
      id: 6,
      src: mongodb,
      title: "Introduction to MongoDB",
      style: "yellow",
      logo: "mongodb",
      link: "https://learn.mongodb.com/c/z-0-wTviRomFtHzm_w34jw",
    },
  ];

  return (
    <div className="certification">
      <div className="certification-content">
        <h1 className="title">Certifications</h1>
        <p className="description">To preserve the memories of my efforts</p>

        <div className="certification-grid">
          {techs.map(({ id, src, title, style, logo, link }) => {
            return (
              <a
                key={id}
                className={`certification-card ${style}`}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <img src={src} alt="" className="certification-image" />
                <div className="title-logo">
                  <div className="logo">
                    {logo === "freecodecamp" ? (
                      <FaFreeCodeCamp size={50} />
                    ) : logo === "coderschool" ? (
                      <img src={coderschoollogo} alt="logo" />
                    ) : logo === "udemy" ? (
                      <SiUdemy size={50} style={{ color: "pink" }} />
                    ) : logo === "mongodb" ? (
                      <SiMongodb size={50} style={{ color: "green" }} />
                    ) : (
                      ""
                    )}
                  </div>
                  <p className="certification-title">{title}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skill;
