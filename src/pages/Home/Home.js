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
          A fresh Front-end developer, eager to further expand my expertise in
          this field.
        </p>

        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/huy-tran-ba2a61258/"
            target="_blank"
            style={{ "--i": 7 }}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/HuyTran0996"
            target="_blank"
            style={{ "--i": 7 }}
          >
            <FaGithub />
          </a>
        </div>
        <a
          href="https://drive.google.com/file/d/1SAXQt0C6qKAh4ClL543Xf2ehGISwI_lU/view?usp=sharing"
          target="_blank"
          class="btn"
        >
          View My CV
        </a>
      </div>

      <div className="home-image">
        {/* <img src="https://diningandnightlife.com/wp-content/uploads/2019/10/Marco.jpg" /> */}
        <img src="./image/avatar.png" alt="avatar" />
      </div>
    </section>
  );
};

export default Home;
