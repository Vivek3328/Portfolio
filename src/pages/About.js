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

const experiences = [
  {
    role: "Software Engineer",
    company: "Chat360, Pune, Maharashtra",
    duration: "April 2025 - Ongoing",
    points: [
      "Engineered an SMS messaging platform using Python, Django, Celery, RabbitMQ, and Redis, processing 10,000+ messages/day with webhook-based delivery receipts and 99.9% uptime.",
      "Integrated Instagram Business Graph API for 50+ business accounts and launched an AI-powered auto-reply engine handling 500+ daily comment interactions with high response accuracy.",
      "Built multi-channel analytics using Redis-cached aggregations and created automated report scheduling for agent performance, serving 10+ active clients.",
    ],
  },
  {
    role: "Software Engineer",
    company: "HexaScal Technologies, Surat, Gujarat",
    duration: "Aug 2024 - Mar 2025",
    points: [
      "Developed responsive web applications using React and TypeScript in collaboration with cross-functional teams to improve UI/UX quality.",
      "Applied industry-standard design principles to deliver user-friendly interfaces that perform consistently across devices.",
      "Optimized frontend performance and improved Lighthouse score from 85 to 97 through faster loading, better accessibility, and enhanced mobile responsiveness.",
    ],
  },
  {
    role: "Software Development Intern",
    company: "Impulsive Web, Noida, Uttar Pradesh",
    duration: "Jan 2024 - Jun 2024",
    points: [
      "Contributed to a frontend product module using React and Tailwind CSS, translating UI designs into reusable and maintainable components.",
      "Implemented interactive features, form validations, and API integrations to improve usability and overall user flow.",
      "Partnered with senior developers to fix UI bugs, refine responsive behavior across devices, and improve code quality through regular reviews.",
    ],
  },
];

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
          {/* Experience */}
          <div className="experience-section w-full lg:w-3/4 mx-auto my-[5rem] px-2">
            <h1
              style={{ paddingBottom: "20px" }}
              className="experience-heading text-center text-4xl "
            >
              <span className="text-white">Work</span>{" "}
              <strong className="text-[#c770f0]">Experience</strong>
            </h1>
            <p className="experience-subtitle text-center text-gray-300 mb-8">
              Building impactful products with clean code and thoughtful UX.
            </p>
            <div className="experience-list">
              {experiences.map((experience, index) => (
                <div
                  key={`${experience.role}-${experience.company}`}
                  className={`experience-row ${index % 2 === 0 ? "left" : "right"}`}
                >
                  <span className="experience-dot" aria-hidden="true"></span>
                  <div className="experience-card">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <h2 className="text-xl md:text-2xl font-semibold text-white">
                        {experience.role}
                      </h2>
                      <p className="experience-duration">{experience.duration}</p>
                    </div>
                    <p className="experience-company">{experience.company}</p>
                    <ul className="experience-points">
                      {experience.points.map((point) => (
                        <li key={point} className="experience-point">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
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
