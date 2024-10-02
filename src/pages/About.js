import React from "react";
import { ImPointRight } from "react-icons/im";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiBootstrap,
  SiExpress,
  SiTailwindcss,
  SiNetlify,
  SiGooglecolab,
  SiKotlin,
  SiTypescript,
  SiLeetcode,
  SiGeeksforgeeks,
} from "react-icons/si";
import { SiFirebase, SiNextdotjs } from "react-icons/si";
import "./styles/About.css";
import about_logo from "../assets/about.png";

const About = () => {
  return (
    <section className="mt-3">
      <div className="about-section">
        <div className="container mx-auto ">
          <div
            className="flex-none  lg:flex items-center justify-around"
            style={{ padding: "10px" }}
          >
            <div
              className="w-full py-[30px] left-0 lg:p-[40px] justify-center "
              style={{ lineHeight: "2rem" }}
            >
              <h1
                style={{ paddingBottom: "20px" }}
                className="text-center text-4xl "
              >
                Know Who <strong className="text-[#c770f0]">I&apos;M</strong>
              </h1>
              <div className="text-2xl text-left">
                <div className="">
                  <blockquote className="blockquote px-2 sm:px-5 mb-0">
                    <p className="text-justify">
                      Hello, I'm Vivek Mittal, a recent graduate in{" "}
                      <span className="text-[#c770f0] font-bold">
                        Electronics and Communication Engineering
                      </span>{" "}
                      from the{" "}
                      <span className="text-[#c770f0] font-bold">
                        Indian Institute of Information Technology, Surat
                      </span>
                    </p>
                    <p className="text-2xl mt-5">
                      Apart from coding, some other activities that I love to
                      do!
                    </p>
                    <ul className="py-2 text-xl ml-10 mt-4">
                      <li className="about-activity flex flex-row items-center">
                        {" "}
                        <ImPointRight className="text-[#c770f0] mr-2" />
                        Playing Games
                      </li>
                      <li className="about-activity flex flex-row items-center mt-2">
                        {" "}
                        <ImPointRight className="text-[#c770f0] mr-2" />
                        Watching Movies
                      </li>
                      <li className="about-activity flex flex-row items-center mt-2">
                        {" "}
                        <ImPointRight className="text-[#c770f0] mr-2" />
                        Travelling
                      </li>
                    </ul>
                  </blockquote>
                </div>
              </div>
            </div>
            <div
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={about_logo} alt="about" className="img-fluid" />
            </div>
          </div>
          {/* Coding Profiles */}
          <div>
            <h1
              style={{ paddingBottom: "20px" }}
              className="text-center text-4xl "
            >
              <strong className="text-[#c770f0]">Coding Profiles</strong>
            </h1>
            <div className="flex flex-wrap justify-center">
              <div className="flex flex-col items-center pr-10">
                <div className=" tech-icons">
                  <a
                    href="https://leetcode.com/u/mittal_70/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SiLeetcode />
                  </a>
                </div>
                <a
                  href="https://leetcode.com/u/mittal_70/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#c95bf5]"
                >
                  Leetcode
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className=" tech-icons">
                  <a
                    href="https://www.geeksforgeeks.org/user/mittal_70/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SiGeeksforgeeks />
                  </a>
                </div>
                <a
                  href="https://www.geeksforgeeks.org/user/mittal_70/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#c95bf5]"
                >
                  Gfg
                </a>
              </div>
            </div>
          </div>
          {/* Skillset */}
          <div className="w-full lg:w-3/4 mx-auto my-[5rem]">
            <h1
              style={{ paddingBottom: "20px" }}
              className="text-center text-4xl "
            >
              <strong className="text-[#c770f0]">Skillset</strong>
            </h1>
            <div className="flex flex-wrap justify-center">
              {" "}
              <div className=" tech-icons">
                <CgCPlusPlus title="C++" />
              </div>
              <div className=" tech-icons">
                <DiJavascript1 title="Javascript" />
              </div>
              <div className=" tech-icons">
                <SiTypescript title="TypeScript" />
              </div>
              <div className=" tech-icons">
                <DiPython title="Python" />
              </div>
              <div className=" tech-icons">
                <SiKotlin title="Kotlin" />
              </div>
              <div className=" tech-icons">
                <DiNodejs title="NodeJS" />
              </div>
              <div className=" tech-icons">
                <DiReact title="ReactJS" />
              </div>
              <div className=" tech-icons">
                <SiNextdotjs title="NextJS" />
              </div>
              <div className=" tech-icons">
                <DiMongodb title="MongoDB" />
              </div>
              <div className=" tech-icons">
                <SiFirebase />
              </div>
              <div className=" tech-icons">
                <SiExpress title="Express" />
              </div>
              <div className=" tech-icons">
                <SiBootstrap title="Bootstrap" />
              </div>
              <div className=" tech-icons">
                <SiTailwindcss title="Tailwind CSS" />
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className=" w-full lg:w-3/4 mx-auto my-[5rem]">
            {" "}
            <h1
              style={{ paddingBottom: "20px" }}
              className="text-center text-4xl "
            >
              <strong className="text-[#c770f0]">Tools</strong>
            </h1>
            <div className="flex flex-wrap justify-center ">
              <div className=" tech-icons">
                <DiGit title="Git" />
              </div>
              <div className=" tech-icons ">
                <SiHeroku title="Heroku" />
              </div>
              <div className=" tech-icons">
                <SiVisualstudiocode title="Visual Studio Code" />
              </div>
              <div className=" tech-icons">
                <SiPostman title="Postman" />
              </div>
              <div className=" tech-icons">
                <SiVercel title="Vercel" />
              </div>
              <div className=" tech-icons">
                <SiNetlify title="Netlify" />
              </div>
              <div className=" tech-icons">
                <SiGooglecolab title="Google Collab" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
