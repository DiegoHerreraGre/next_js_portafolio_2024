"use client";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  return (
    <>
      <br />
      <br />
      <div className="mt-10 gap-2 grid grid-cols-1 sm:gird-cols-12">
        <br />
        <br />
        <div className="mt-10 text-left place-self-center w-auto mx-auto">
          <h1 className="mb-10 text-violet-500 font-extrabold text-7xl sm:text-3xl md:text-5xl lg:text-8xl">
            Hi, I'm Diego
          </h1>
          <br />
          <hr />
          <br />
          <TypeAnimation
            className="text-indigo-200"
            sequence={[
              "Full-Stack Developer",
              1000,
              "Attention to your needs",
              1000,
              "Front-End design for a better UI/UX!",
              1000,
              "Back-End service and data-base analytics made for you",
              1000,
              "Marketing and SEM",
              1000,
              "Real Estate marketing techniques",
              1000,
            ]}
            wrapper="span"
            speed={70}
            style={{ fontSize: "4em", display: "inline-block" }}
            repeat={Infinity}
          />
          <br />
          <br />
          <button className="px-8 py-8 m-5 w-full sm:w-fit md:w-fit rounded-full bg-white text-black bg-gradient-to-br from-blue-500 via-pink-300 to-red-400">
            Hire me
          </button>
          <button className="px-1 py-1 w-full m-5 sm:w-fit md:w-fit rounded-full bg-transparent hover:bg-slate-200 text-white hover:text-black border border-white bg-gradient-to-br from-blue-500 via-pink-300 to-red-400">
            <span className="block bg-black hover:bg-white hover:text-black rounded-full p-6">
              Download CV
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
