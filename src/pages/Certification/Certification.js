// Import React and your assets
import React from "react";

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
      src: responsive,
      title: "Responsice Web Design",
      style: "orange",
      logo: "freecodecamp",
    },
    {
      id: 2,
      src: coderschool,
      title: "Full Stack Web Development",
      style: "blue",
      logo: "coderschool",
    },
    {
      id: 3,
      src: expressjs,
      title: "Nodejs, Express, MongoDB",
      style: "green",
      logo: "udemy",
    },
    {
      id: 4,
      src: react,
      title: "Mordern React With Redux",
      style: "sky",
      logo: "udemy",
    },
    {
      id: 5,
      src: mongodb,
      title: "Introduction to MongoDB",
      style: "yellow",
      logo: "mongodb",
    },
  ];

  return (
    <div className="certification">
      <div className="certification-content">
        <h1 className="title">Certifications</h1>
        <p className="description">To preserve the memories of my efforts</p>

        <div className="certification-grid">
          {techs.map(({ id, src, title, style, logo }) => {
            return (
              <div key={id} className={`certification-card ${style}`}>
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skill;
