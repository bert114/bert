import "../scss/style.scss";

import React, { useEffect, useState } from "react";
import logo from "../assets/icons/logo.png";
import menuIcon from "../assets/icons/menu.svg";
import closeIcon from "../assets/icons/close.svg";
import heroImg from "../assets/img/hero.png";

import { Link } from "react-scroll";

function Hero() {
  const [menu, handleMenu] = useState(false);

  const handleClick = () => {
    if (!menu) {
      handleMenu(true);
    } else {
      handleMenu(false);
    }
  };

  const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);

    useEffect(() => {
      const media = window.matchMedia(query);
      const listener = () => setMatches(media.matches);
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    }, [query]);

    return matches;
  };

  const isMobile = useMediaQuery("(min-width: 640px)");
  const condition = isMobile || !menu ? "menu-wrapper" : "menu-desktop";

  return (
    <div className="hero wrapper">
      <div className="nav-wrapper">
        <div className="nav">
          <div className="logo">
            <a href="#">
              <img src={logo} alt="web_logo" />
            </a>
          </div>
          <button className="menu-btn" onClick={handleClick}>
            <img src={!menu ? menuIcon : closeIcon} alt="menu" />
          </button>
        </div>

        <div className={condition}>
          <ul>
            <li>
              <Link to="about" smooth={true} duration={500}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500}>
                SKILLS
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500}>
                PROJECTS
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="showcase">
        <div className="showcase-container">
          <div className="content">
            <div className="">
              <h4>
                Hi I'm <span>Albert Penano</span> a student
              </h4>
              <h1>Front-end developer </h1>
              <p>
                A Frontend Developer focused on crafting responsive and
                intuitive web experiences
              </p>
            </div>
            <div>
              <Link to="projects">
                <button className="primary-btn ">VIEW MY WORK</button>
              </Link>
            </div>
          </div>
          <picture>
            <img src={heroImg} alt="bert_img" />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default Hero;
