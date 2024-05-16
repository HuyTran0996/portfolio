import React from "react";

import buyit from "../../assets/portfolio/buyit.jpg";
import themovie from "../../assets/portfolio/themovie.jpg";
import sass from "../../assets/sass.png";
import javascript from "../../assets/javascript.png";
import reactImage from "../../assets/react.png";
import redux from "../../assets/redux.png";
import expressjs from "../../assets/expressjs.png";
import mongodb from "../../assets/mongodb.png";

import github from "../../assets/github.png";

// import "./Skill.scss";

const Portfolio = () => {
  const techs = [
    {
      id: 1,
      src: buyit,
      title: "Buy It",
      style: "orange",
      demo: "https://marketplace-front-end-2024.netlify.app",
      code: "https://github.com/HuyTran0996/Marketplace",
    },
    {
      id: 2,
      src: themovie,
      title: "The Movie",
      style: "blue",
      demo: "https://the-movie-2023-11-28.netlify.app",
      code: "https://github.com/HuyTran0996/The-Movie",
    },
  ];
  return (
    <div className="portfolio">
      <div className="content">
        <h1 className="title">Portfolio</h1>
        <p className="description">These are my projects</p>

        <div className="technologies-grid">
          {techs.map(({ id, src, title, style, demo, code }) => (
            <div key={id} className={`technology-card ${style}`}>
              <img src={src} alt="" className="technology-image" />
              <p className="technology-title">{title}</p>
              <div className="button">
                <a href={demo} target="_blank" className="demo">
                  Demo
                </a>
                <a href={code} target="_blank" className="code">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
