import React from "react";
import aboutBlob from "../assets/about/aboutBlob.svg";
import aboutImg from "../assets/about/about-me-img.png";

import fb from "../assets/about/fb.png";
import inst from "../assets/about/insta.png";

function About() {
  return (
    <>
      <section>
        <div className="about">
          <div className="about-container" id="about">
            <picture className="hidden">
              <img src={aboutImg} alt="" />
            </picture>
            <div className="about-content">
              <div>about me</div>
              <div>
                <h2>Need a Modern Website?</h2>
                <h3>Let's Build Something Amazing</h3>
                <p>
                  I’m a passionate Frontend Developer who turns ideas into
                  sleek, responsive, and user-friendly web experiences. With
                  skills in JavaScript, SCSS, and React, I focus on crafting
                  designs that feel natural and perform seamlessly across all
                  devices.
                </p>

                <div className="socials">
                  <div>Find Me On These Platforms:</div>
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/share/1DUZf4fFtL/">
                        <img src={fb} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/bert14208?igsh=dWVvdnZ5eWI5MGFv">
                        <img src={inst} alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <img className="blob1" src={aboutBlob} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
