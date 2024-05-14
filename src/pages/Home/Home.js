import React from "react";

import "./Home.scss";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h3>Hello, I Am</h3>
        <h1>Huy Trần</h1>
        <h3>
          And I'm a <span>Frontend Developer</span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
          accusamus impedit facilis magni temporibus nostrum quas, et velit,
          tenetur earum aspernatur officiis vero modi ab tempora pariatur
          laudantium quasi officia?
        </p>

        <div className="social-media">
          <a href="#" style={{ "--i": 7 }}>
            <FaLinkedin />
          </a>
          <a href="#" style={{ "--i": 7 }}>
            <FaGithub />
          </a>
        </div>
        <a href="#" class="btn">
          Download CV
        </a>
      </div>

      <div className="home-image">
        <img src="https://diningandnightlife.com/wp-content/uploads/2019/10/Marco.jpg" />
      </div>
    </section>
  );
};

export default Home;
