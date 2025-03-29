import React from "react";
import fb from "../assets/icons/footerIcons/fb.svg";
import github from "../assets/icons/footerIcons/github.svg";
import insta from "../assets/icons/footerIcons/insta.svg";
import { Link } from "react-scroll";
import logo from "../assets/icons/logo.png";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="content">
            <div className="logo">
              <img src={logo} alt="" />
            </div>

            <ul className="footer-nav">
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

            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </div>

            <ul className="footer-social-links">
              <li>
                <a href="https://www.facebook.com/share/1DUZf4fFtL/">
                  <img src={fb} alt="" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/bert14208?igsh=dWVvdnZ5eWI5MGFv">
                  <img src={insta} alt="" />
                </a>
              </li>
              <li>
                <a href="https://github.com/waltuh12345">
                  <img src={github} alt="" />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-copy">
            Copyright © Criativo Creative Agency. All Right Reserved By
            Rometheme.
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
