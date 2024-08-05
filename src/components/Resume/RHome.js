import React from "react";
import SideBar from "./RSideBar";
import Objective from "./RObjective";
import Internship from "./RInternship";
import Education from "./REducation";
import Projects from "./RProjects";
import CollegeProjects from "./RCollegeProjects";
import Footer from "../Footer";
function RHome() {
  return (
    <>
      {/* Page Container */}
      <div className="w3-content  resumetop" style={{ maxWidth: 1400 }}>
        {/* The Grid */}
        <div className="w3-row-padding">
          {/* Left Column Start */}
          <SideBar />
          {/* Left Column End */}
          {/* Right Column Start */}
          <div class="w3-twothird ">
            <Objective />
            <Internship />
            <Education />
            <Projects />
            <CollegeProjects />
          </div>
          {/* Right Column End */}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default RHome;
