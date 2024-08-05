import React from "react";
import { Link } from "react-router-dom";
import { projectImages } from "../data/projectImages";
import Footer from "../components/Footer";

function Project() {
  return (
    <>
      <h1 className="projecth text-center">My Projects</h1>
      <div className="project p-5 ">
        {projectImages.map((v, i) => {
          return <ProjectCart itemp={v} key={i} />;
        })}
      </div>
      <Footer />
    </>
  );
}

export default Project;

function ProjectCart({ itemp }) {
  return (
    <>
      <div className="projectcard">
        <div className="proimg">
          <img src={itemp.image} alt={itemp.alt} />
        </div>
        <div className="protitle">
          <div className="protitleh1">
            <p className="protext1">{itemp.name}</p>
            <p className="protext2">{itemp.skills}</p>
          </div>
          <div className="protitleh2">
            <p className="text-center protext1">
              <Link to={itemp.linkproject}>Check it Out</Link> |{" "}
              <Link to={itemp.githublink}>Go to Github</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
