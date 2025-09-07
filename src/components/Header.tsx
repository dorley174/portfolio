"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";
import "../css/main.css";

const Header: React.FC = () => {
  const scrollToFirst = () => {
    const fe = document.getElementById("first");
    if (fe) {
      fe.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSecond = () => {
    const fe1 = document.getElementById("exp");
    if (fe1) {
      fe1.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToThird = () => {
    const fe = document.getElementById("slider");
    if (fe) {
      fe.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToFourth = () => {
    const fe = document.getElementById("fourth");
    if (fe) {
      fe.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle("dark-theme");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header>
      <h1 className="nav">
        <div className="container">
          <div className="nav-row">
            <button className="nav-list__item" onClick={scrollToFirst}>
              <a className="nav-list__link">About me</a>
            </button>
            <p style={{ color: "#00ffa1" }}>|</p>
            <button className="nav-list__item" onClick={scrollToSecond}>
              <a className="nav-list__link">Experience</a>
            </button>
            <p style={{ color: "#00ffa1" }}>|</p>
            <button className="nav-list__item" onClick={scrollToThird}>
              <a className="nav-list__link">Projects</a>
            </button>
            <p style={{ color: "#00ffa1" }}>|</p>
            <button className="nav-list__item" onClick={scrollToFourth}>
              <a className="nav-list__link">Contacts</a>
            </button>
          </div>
        </div>
      </h1>

      <div className="header" id="first">
        <div className="bio">
          <h1 className="header__title">
            <strong>Danil Valiev</strong> <br />
          </h1>
          <h3 className="header__title" style={{ fontSize: "30px" }}>
            aka <strong>Dorley</strong> <br />
          </h3>
          <div className="header__text">
            <a
              style={{ color: "#fff" } as React.CSSProperties}
              href="https://www.google.com/maps/place/Иннополис"
              target="_blank"
              rel="noopener noreferrer"
              title="Местоположение"
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Innopolis, Russia
            </a>{" "}
            <br /> <br />
            <p>
              An Entrepreneur who works in DevOps engineering, Software and
              FronEnd Development.
            </p>
          </div>

          <hr className="styled-line"></hr>
          <div className="links">
            <a
              href="https://github.com/dorley174"
              className="button"
              style={{ "--clr": "#00ffa1" } as React.CSSProperties}
            >
              <span>View my GitHub</span>
              <i></i>
            </a>
            <a
              href="https://drive.google.com/file/d/1BQefnzL6HOdVOZLi-v1IHrpbUWoRVSrG/view?usp=sharing"
              className="button"
              style={{ "--clr": "#E40045" } as React.CSSProperties}
            >
              <span>Download CV</span>
              <i></i>
            </a>
          </div>
        </div>

        <div className="bio1">
          <Image
            alt="my photo"
            src="/assets/headerphoto.jpg"
            className="bio-photo"
            width={200}
            height={200}
            style={{ objectFit: "cover", width: "100%" }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
