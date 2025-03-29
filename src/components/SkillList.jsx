import React from "react";
import skills from "../skills.json";
import SkillLists from "./SkillLists";

function SkillList() {
  return (
    <>
      <section className="skills-wrapper" id="skills">
        <div className="skills-container">
          <h2>Skill Set</h2>
          <ul>
            {skills.skills.map((skill, index) => (
              <SkillLists skill={skill} key={index} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default SkillList;
