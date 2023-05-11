import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import videoBackground from "../assets/video/background.mp4";
import videoBackgroundTwo from "../assets/video/Background.webm";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="relative w-full h-screen bg-[#0a192f]">
      <video className="absolute top-0 left-0 w-full h-full object-cover z-0" autoPlay loop muted>
        <source src={videoBackground} type="video/mp4" />
        <source src={videoBackgroundTwo} type="video/webm" />
      </video>
      <div className="relative max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full z-10">
        <p className="text-[#6BB7D9]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Karl Knapp</h1>
        <h2 className="text-4xl sm:text7xl font-bold text-[#8892b0]">I'm a Full Stack Developer.</h2>
        <div className="max-w-[700px] bg-black/80">
          <p className="text-[#8892b0] py-2 max-w-[700px] pl-2">
            As a skilled full-stack developer, I excel in crafting and designing web applications that prioritize user
            experience. My expertise lies in seamlessly integrating visually appealing and adaptable front-end
            interfaces with robust back-end functionalities.
          </p>
        </div>
        <div className="flex flex-row space-x-4">
          <Link to="portfolio" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#6BB7D9] hover:border-[#6BB7D9]">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>

          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://docs.google.com/document/d/1sGNtU117oLF2AnXKnXSrRwolGoF-5ECf2Sd-i5nMgfw/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#6BB7D9] hover:border-[#6BB7D9]">
              View Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
