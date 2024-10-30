import React from "react";

import themovie2 from "../../assets/portfolio/themovie2.jpg";
import buyit from "../../assets/portfolio/buyit.jpg";
import themovie from "../../assets/portfolio/themovie.jpg";
import portfolio from "../../assets/portfolio/portfolio.jpg";
import foodrecipe from "../../assets/portfolio/foodrecipe.jpg";
import osStore from "../../assets/portfolio/osStore.jpg";

import "./Project.scss";

const Portfolio = () => {
  const techs = [
    {
      id: 1,
      src: osStore,
      title: "OS Store",
      style: "white",
      demoUser: "https://os-stores.netlify.app/",
      demoAdmin: "https://os-store-admin.netlify.app/",
    },
    {
      id: 2,
      src: foodrecipe,
      title: "The Recipe",
      style: "white",
      demo: "https://the-food-recipe-app.netlify.app",
      code: "https://github.com/HuyTran0996/food-recipe-app",
    },
    {
      id: 3,
      src: themovie2,
      title: "The Movie 2nd",
      style: "white",
      demo: "https://the-movie-2nd.netlify.app",
      code: "https://github.com/HuyTran0996/The-Movie-Version-2",
    },
    {
      id: 4,
      src: buyit,
      title: "Buy It",
      style: "white",
      demo: "https://marketplace-front-end-2024.netlify.app",
      code: "https://github.com/HuyTran0996/Marketplace",
    },
    {
      id: 5,
      src: portfolio,
      title: "My Page",
      style: "white",
      demo: "https://huytran-dev.netlify.app/projects",
      code: "https://github.com/HuyTran0996/portfolio",
    },
    {
      id: 6,
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
          {techs.map(
            ({ id, src, title, style, demo, code, demoUser, demoAdmin }) => (
              <div key={id} className={`project-card ${style}`}>
                <img src={src} alt="" className="project-image" />
                <p className="project-title">{title}</p>
                {demo ? (
                  <div className="button">
                    <a href={demo} target="_blank" className="demo">
                      Demo
                    </a>
                    <a href={code} target="_blank" className="code">
                      Code
                    </a>
                  </div>
                ) : (
                  ""
                )}

                {demoUser && demoAdmin ? (
                  <div className="button">
                    <a href={demoUser} target="_blank" className="demo">
                      User
                    </a>
                    <a href={demoAdmin} target="_blank" className="code">
                      Admin
                    </a>
                  </div>
                ) : (
                  ""
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
