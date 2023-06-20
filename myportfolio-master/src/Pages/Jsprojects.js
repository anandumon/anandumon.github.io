import React from "react";
import "./Jsprojects.css";
import ProjectData from "../Data/Jsprojects.json";
import githubImg from "../assets/img/github.png";
import pf1 from "../assets/img/project1.png";
import pf2 from "../assets/img/project2.png";
import pf3 from "../assets/img/project3.png";

const Jsprojects = () => {
  return (
    <div className="jsprojects">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 offset-sm-1">
            <h2>Projects</h2>
            <br />
            <div className="row">
              {ProjectData.map((project, i) => (
                <div className="col-sm-6" key={i}>
                  <br />
                  <a
                    href={project.codelink}
                    className="btn btn-default d-block github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Code <img src={githubImg} alt={i} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jsprojects;
