import React from "react";
import { jobProfileText } from "../data/jobProfile";
function Roles() {
  return (
    <>
      <div className="roles">
        <p className="rolesText">Job Profiles</p>
        <div className="rolescontainer">
          {jobProfileText.map((v, i) => {
            return <JobProfile s jitem={v} key={i} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Roles;

function JobProfile({ jitem }) {
  return (
    <>
      <div className="rolesCard">{jitem.title}</div>
    </>
  );
}
