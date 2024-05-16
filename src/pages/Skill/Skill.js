// Import React and your assets
import React from "react";

import html from "../../assets/html.png";
import css from "../../assets/css.png";
import sass from "../../assets/sass.png";
import javascript from "../../assets/javascript.png";
import reactImage from "../../assets/react.png";
import redux from "../../assets/redux.png";
import expressjs from "../../assets/expressjs.png";
import mongodb from "../../assets/mongodb.png";

import github from "../../assets/github.png";

import "./Skill.scss";

const Skill = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "orange",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "blue",
    },
    {
      id: 3,
      src: sass,
      title: "SASS",
      style: "pink",
    },
    {
      id: 4,
      src: javascript,
      title: "JavaScript",
      style: "yellow",
    },
    {
      id: 5,
      src: reactImage,
      title: "React",
      style: "sky",
    },
    {
      id: 6,
      src: redux,
      title: "Redux",
      style: "violet",
    },
    {
      id: 7,
      src: expressjs,
      title: "Express JS",
      style: "white",
    },
    {
      id: 8,
      src: mongodb,
      title: "Mongo DB",
      style: "greenyellow",
    },
    {
      id: 9,
      src: github,
      title: "GitHub",
      style: "gray",
    },
  ];
  return (
    <div className="experience">
      <div className="content">
        <h1 className="title">Experience</h1>
        <p className="description">
          These are the technologies I've worked with
        </p>

        <div className="technologies-grid">
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`technology-card ${style}`}>
              <img src={src} alt="" className="technology-image" />
              <p className="technology-title">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
