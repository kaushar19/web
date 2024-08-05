import React from "react";
import { skillsText } from "../data/skillsText";
function ToolsSkills() {
  return (
    <>
      {/* Tools and Skills Start */}

      <div className="tools">
        <p className="toolsText">
          <span>Tools</span>
          <span className="toolstext2">
            <span className="toolstext3">&amp;</span>Skills
          </span>
        </p>
        <div className="toolscontainer">
          {skillsText.map((v, i) => {
            return <SkillsItems sitem={v} key={i} />;
          })}
        </div>
      </div>
      {/* Tools and Skills End */}
    </>
  );
}
export default ToolsSkills;

function SkillsItems({ sitem }) {
  return (
    <>
      <div className="toolsCard">{sitem.title}</div>
    </>
  );
}
