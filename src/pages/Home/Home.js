import React from "react";

import "./Home.scss";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h3>Hello, I Am</h3>
        <h1>Huy Trần</h1>
        <h3>
          And I'm a <span>Front-end Developer</span>
        </h3>

        <p>
          Passionate about web-development, I blend creativity with technical
          expertise to deliver outstanding results. Committed to staying current
          with industry trends and continuously improving my skills.
        </p>

        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/huy-tran-ba2a61258/"
            target="_blank"
            style={{ "--i": 7 }}
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://github.com/HuyTran0996"
            target="_blank"
            style={{ "--i": 7 }}
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://qr-talk.zdn.vn/4/858153287/4c5deaeb4da5a4fbfdb4.jpg"
            target="_blank"
            style={{ "--i": 8 }}
          >
            <SiZalo size={28} />
          </a>
          <a
            href="https://discord.com/users/huy_tran96"
            target="_blank"
            style={{ "--i": 9 }}
          >
            <FaDiscord size={28} />
          </a>
          <a
            href="mailto:tranviquanghuy@gmail.com"
            target="_blank"
            style={{ "--i": 10 }}
          >
            <MdEmail size={28} />
          </a>
        </div>
        <a
          href="https://drive.google.com/file/d/1OjKOp7YsQN4k6ECU-NwL89Eojhv0Fw8l/view?usp=sharing"
          target="_blank"
          class="btn"
        >
          View My CV
        </a>
      </div>

      <div className="home-image">
        <img src="./image/avatar.png" alt="avatar" />
      </div>
    </section>
  );
};

export default Home;
