import React from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectData from "../data/ProjectData";
import "./styles/Project.css";

const Project = () => {
  return (
    <div className="project-section">
      <div className="project-inner">
        <header className="project-hero">
          <p className="project-eyebrow">Portfolio</p>
          <h1 className="project-heading">
            My Recent <span className="project-heading-accent">Projects</span>
          </h1>
          <p className="project-lede">
            Full-stack builds, UI polish, and tools I ship end to end — from idea
            to deployment.
          </p>
        </header>

        <ul className="project-grid" role="list">
          {ProjectData?.map((data) => (
            <li key={data.id} className="project-grid-item">
              <ProjectCard
                title={data.title}
                imgPath={data.imgPath}
                desc={data.description}
                link={data.link}
                demo={data.demo}
                tech={data.technologies}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
