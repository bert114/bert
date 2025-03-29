import React, { useEffect } from "react";

function SkillLists({ skill, index }) {
  return (
    <>
      <li key={index} id={skill.id} className="">
        <div className="img-wrapper">
          <img src={skill.image} alt="" />
        </div>
        <div>
          <h3>{skill.name}</h3>
          <div className="percentage-wrapper">
            <div className="bar">
              <div className="progress"></div>
            </div>
            <div className="percent">{10}%</div>
          </div>
        </div>
      </li>
    </>
  );
}

export default SkillLists;
