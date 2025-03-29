import React, { useEffect, useState } from "react";
import ProjectListing from "./ProjectListing";
import chevron from "../assets/icons/chevdown.svg";
import { Link } from "react-scroll";
import Loader from "./Loading";

function ProjectListings() {
  const [projects, setProjects] = useState([]);
  const [click, isClick] = useState(false);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("/api/projects?_limit=3");

  const fetchProject = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      setProjects(data);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    fetchProject(url);
  }, [url]);

  // useEffect(() => {
  //   fetchProject(url);
  // }, [loading]);

  const handelClick = () => {
    if (!click) {
      isClick(true);
      setLoading(true);

      setUrl("/api/projects?_limit=40");
    } else {
      isClick(false);
      setLoading(true);

      setUrl("/api/projects?_limit=3");

      setTimeout(() => {
        document
          .getElementById("projects")
          .scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <>
      <div className="project-wrapper">
        <div className="project-container" id="projects">
          <h2>MY PROJECTS:</h2>
          <p></p>
          {loading ? (
            <div className="loading-wrapper">
              <Loader />
            </div>
          ) : (
            <ul>
              {projects.map((project, index) => (
                <ProjectListing project={project} key={index} />
              ))}
            </ul>
          )}

          <button className="more" onClick={handelClick}>
            {!click ? "View more" : "View Less"} <img src={chevron} alt="" />
          </button>
        </div>
      </div>
    </>
  );
}

export default ProjectListings;
