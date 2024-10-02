import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { TbView360 } from "react-icons/tb";

const ProjectCard = (props) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="project-card-view h-full hover:bg-[#cd5ff8]">
        <img src={props.imgPath} alt="card--img" />
        <div className="card-body p-4 overflow-hidden">
          <h5 className="card-title  text-center text-2xl font-bold text-[#cd5ff8]">
            {props.title}
          </h5>
          <div className="py-3 px-0">
            {props?.tech?.map((name) => (
              <button className=" py-2 px-2 font-mono cursor-auto m-2 rounded-lg border hover:border-none hover:bg-[#cd5ff8]">
                {name}
              </button>
            ))}
          </div>

          {show ? (
            <p className="card-text p-1 sm:p-3 text-left sm:text-justify text-white">
              {props.desc}{" "}
              <span
                className="text-[#cd5ff8] cursor-pointer	"
                onClick={() => {
                  setShow(!show);
                }}
              >
                Read Less
              </span>
            </p>
          ) : (
            <p className="card-text p-1 sm:p-3 text-left sm:text-justify">
              {props?.desc?.substring(0, 170)}......{" "}
              <span
                className="text-[#cd5ff8] cursor-pointer	"
                onClick={() => {
                  setShow(!show);
                }}
              >
                Read More
              </span>
            </p>
          )}
          <div className="p-2 mx-auto sm:mx sm:p-5 flex justify-around ">
            {" "}
            <a href={props.link} target="_blank" rel="noreferrer">
              <button
                className="flex items-center justify-center py-2 px-3  rounded-lg bg-[#6b1090] hover:bg-[#cd5ff8]"
                rel="noopener noreferrer"
              >
                <BsGithub className="text-2xl" /> &nbsp;{" "}
                <span className="text">{"GitHub"}</span>
              </button>
            </a>
            <a href={props.demo} target="_blank" rel="noreferrer">
              <button
                className=" flex items-center justify-center py-2 px-2   sm:my-0 rounded-lg bg-[#6b1090] hover:bg-[#cd5ff8]"
                rel="noopener noreferrer"
              >
                <TbView360 className="text-2xl" /> &nbsp;
                <span className="text">{"Demo"}</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
