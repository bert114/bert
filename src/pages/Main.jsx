import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import SkillList from "../components/SkillList";
import ProjectListings from "../components/ProjectListings";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Main() {
  return (
    <>
      <Hero />
      <About />
      <SkillList />
      <ProjectListings />
      <Contact />
      <Footer />
    </>
  );
}

export default Main;
