import React from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectData from "../data/ProjectData";
import "./styles/Project.css";

const Project = () => {
  return (
    <div className="project-section sm:px-5 pt-[6rem] pb-[2rem] ">
      <div className="container-fluid text-center">
        <h1 className="project-heading px-2 ">
          My Recent <strong className="text-[#cd5ff8]">Projects </strong>
        </h1>
        <p style={{ color: "white" }} className="px-2 pb-2">
          Here are a few projects I&apos;ve worked on recently.
        </p>
        <div
          className="sm:grid  sm:grid-cols-2 lg:grid-cols-3 grid-flow-row auto-row-max mx-auto"
          style={{ justifyContent: "center", paddingBottom: "10px" }}
        >
          {ProjectData?.map((data) => {
            return (
              <div key={data.id} className="project-card">
                <ProjectCard
                  title={data.title}
                  imgPath={data.imgPath}
                  desc={data.description}
                  link={data.link}
                  demo={data.demo}
                  tech={data.technologies}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
