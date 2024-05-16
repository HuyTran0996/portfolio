import React from "react";

import buyit from "../../assets/portfolio/buyit.jpg";
import themovie from "../../assets/portfolio/themovie.jpg";
import portfolio from "../../assets/portfolio/portfolio.jpg";

import "./Project.scss";

const Portfolio = () => {
  const techs = [
    {
      id: 1,
      src: buyit,
      title: "Buy It",
      style: "white",
      demo: "https://marketplace-front-end-2024.netlify.app",
      code: "https://github.com/HuyTran0996/Marketplace",
    },
    {
      id: 2,
      src: portfolio,
      title: "My Page",
      style: "white",
      demo: "",
      code: "https://github.com/HuyTran0996/portfolio",
    },
    {
      id: 3,
      src: themovie,
      title: "The Movie",
      style: "white",
      demo: "https://the-movie-2023-11-28.netlify.app",
      code: "https://github.com/HuyTran0996/The-Movie",
    },
  ];
  return (
    <div className="project">
      <div className="project-content">
        <h1 className="title">Projects</h1>
        <p className="description">These are my projects</p>

        <div className="project-grid">
          {techs.map(({ id, src, title, style, demo, code }) => (
            <div key={id} className={`project-card ${style}`}>
              <img src={src} alt="" className="project-image" />
              <p className="project-title">{title}</p>
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
