import React from "react";

import "./About.scss";
import { FaReact } from "react-icons/fa";
const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h1>
          About <span>Me</span>
        </h1>
        <p className="aqua">
          <FaReact className="list" size={30} /> Transitioning to web
          development in 2024, I am a passionate and driven Front-end developer
          eager to further expand my expertise in this dynamic field.
        </p>
        <p>
          <FaReact className="list" size={30} /> I hold a degree from the
          Industrial University of Ho Chi Minh City and have accumulated three
          years of professional experience in the mechanical industry, here I
          honed my problem-solving skills and attention to detail.
        </p>
        <p className="aqua">
          <FaReact className="list" size={30} /> I am committed to leveraging my
          diverse background and continuous learning to contribute effectively
          to cutting-edge web development projects.
        </p>
      </div>

      <div className="about-image">
        <FaReact className="img" size={300} />
      </div>
    </section>
  );
};

export default About;
