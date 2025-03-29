import React, { useEffect } from "react";

function ProjectListing({ project, index }) {
  const openLink = (url) => {
    window.open(url, "_blank"); // Opens the link in a new tab
  };

  return (
    <>
      <li key={index} id={project.id} className="hidden">
        <div className="img-wrapper">
          <img src={project.img} alt={project.img} />
        </div>
        <div className="flex">
          <div className="box1">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>

          <div className="btn-wrapper">
            <button onClick={() => openLink(project.liveUrl)}>View Live</button>
            <button onClick={() => openLink(project.repoUrl)}>
              Github repo
            </button>
          </div>
        </div>
      </li>
    </>
  );
}

export default ProjectListing;
