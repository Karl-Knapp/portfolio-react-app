import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#6BB7D9]">About</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Career Goals</p>
          </div>
          <div>
            <p>
              I am eager to improve my communication skills, collaborate effectively within a team, acquire valuable
              experience, engage with cutting-edge JavaScript libraries such as Next.js, advance my programming
              proficiency in JavaScript, and ultimately evolve into a skilled Software Engineer. In addition, I have set
              my sights on learning Rust and Python throughout 2024 to broaden my language repertoire.
            </p>
          </div>
          <div className="sm:text-right text-4xl font-bold">
            <p>Who I Am</p>
          </div>
          <div>
            I'm a full-stack web developer from the state of Alabama and was educated by Kenzie Academy. I have been
            using the internet since I was a child. I became enamored with webapp design rather recently and having the
            ability to bring any wayward idea to life has motivated me to become a webapp developer.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
