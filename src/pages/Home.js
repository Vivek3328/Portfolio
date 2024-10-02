import React from "react";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import TypeWriter from "../components/TypeWriter";
import "./styles/Home.css";
import logo from "../assets/home-main.svg";
import EmailSection from "../components/EmailSection";
import vivek_logo from "../assets/vivek.jpg";

const Home = () => {
  return (
    <section className="mx-auto  w-fit sm:w-full">
      <div className="home-section px-[2rem] lg:px-[4rem] mx-auto" id="home">
        {/*  <Particle /> */}
        <div className="home-content mx-auto container">
          <div className="flex-none lg:flex items-center justify-around">
            <div className="w-full p-1 left-0 lg:p-[50px] text-center lg:text-left">
              <h1 className="heading pb-2 ">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I&apos;M
                <strong className="main-name"> Vivek Mittal</strong>
              </h1>

              <div className="type">
                <TypeWriter />
              </div>
            </div>

            <div className=" pb-2">
              <img src={logo} alt="home_pic" className=" img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="home-about-section container my-5 mx-auto" id="about">
        <div className="container-fluid">
          <div className="container">
            <h1 className="text-center" style={{ fontSize: "2.6rem" }}>
              <span className="text-white">LET ME</span>{" "}
              <span className="text-[#c95bf5]"> INTRODUCE </span>{" "}
              <span className="text-white">MYSELF</span>
            </h1>
            <div className="flex-none lg:flex my-[3rem] justify-around items-center	">
              <div className="w-full lg:w-1/2 p-5 home-about-description mx-auto">
                {/* <p className="home-about-body m-[1rem] lg:mx-[3rem] ">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b>
              </i>
              and also in areas related to{" "}
              <b className="purple">
                Deep Learning and Natural Launguage Processing.
              </b>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing
              products with <b className="purple">Node.js</b> and{" "}
              <i>
                <b className="purple">
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p> */}
                <div className="">
                  <div className="">
                    <blockquote className="blockquote sm:px-5  mb-0">
                      <p
                        className="px-2 lg:px-5 text-lg"
                        style={{ lineHeight: "2rem", textAlign: "justify" }}
                      >
                        I am a dedicated Software Developer and Competitive
                        Programmer, recently graduated in Electronics and
                        Communication Engineering from the Indian Institute of
                        Information Technology, Surat. With a strong passion for
                        problem-solving, I thrive on building innovative and
                        efficient web applications.
                        <br />
                        <br />
                        My core strengths include web application development
                        and tackling complex challenges through programming. I
                        am continuously honing my skills, aiming to stay updated
                        with the latest technologies and best practices.
                      </p>

                      <p className="text-center mt-4 text-gray-400"></p>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="w-[20rem] h-[20rem] mx-auto my-2 lg:mx rounded-full overflow-hidden">
                <img
                  src={vivek_logo}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative p-5">
              <div className="home-about-social">
                <h1 className="text-3xl">FIND ME ON</h1>
                <p>
                  Feel free to <span className="text-[#c95bf5]">connect </span>
                  with me
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/Vivek3328"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <AiFillGithub className="svg" />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://twitter.com/Mittal3328"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <AiOutlineTwitter className="svg" />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/vivek-mittal-7358581bb/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <FaLinkedinIn className="svg" />
                    </a>
                  </li>
                </ul>
              </div>
              <EmailSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
