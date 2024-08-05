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
          return <ProjectCart item={v} key={i} />;
        })}
      </div>
      <Footer />
    </>
  );
}

export default Project;

function ProjectCart({ item }) {
  return (
    <>
      <div className="projectcard">
        <div className="proimg">
          <img src={item.image} alt={item.alt} />
        </div>
        <div className="protitle">
          <div className="protitleh1">
            <p className="protext1">{item.name}</p>
            <p className="protext2">{item.skills}</p>
          </div>
          <div className="protitleh2">
            <p className="text-center protext1">
              <Link to={item.linkproject}>Check it Out</Link> |{" "}
              <Link to={item.githublink}>Go to Github</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
