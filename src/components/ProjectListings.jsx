import React, { useEffect, useState } from "react";
import ProjectListing from "./ProjectListing";
import chevron from "../assets/icons/chevdown.svg";
import { Link } from "react-scroll";
import Loader from "./Loading";
import { data } from "react-router-dom";

function ProjectListings() {
  const [url, setUrl] = useState("http://localhost:9000/api/posts");
  const [projects, setProjects] = useState([]);
  const [click, isClick] = useState(false);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(3);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();

        setProjects(data);

        setTimeout(() => {
          console.log("Fetched Data: ", data);
        }, 5000);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, []);

  useEffect(() => {
    console.log("Updated project", projects);
  }, [projects]);

  const handelClick = async () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);

    if (limit == 3) {
      setLimit(30);
    } else {
      setLimit(3);
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
              {projects.slice(0, limit).map((project, index) => (
                <ProjectListing project={project} key={index} />
              ))}
            </ul>
          )}

          <button className="more" onClick={handelClick}>
            {limit == 3 ? "View more" : "View Less"}{" "}
            <img src={chevron} alt="" />
          </button>
        </div>
      </div>
    </>
  );
}

export default ProjectListings;
