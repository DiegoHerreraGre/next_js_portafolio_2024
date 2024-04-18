"use client";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:gird-cols-12">
        <div className="text-left place-self-center">
          <h1 className="text-white mb-4 font-extrabold text-6xl md:text-5xl lg:text-8xl flex-col">
            Hello, my name is Diego
          </h1>
          <p className="text-neutral-500 text-2xl md:text-3xl lg:text-4xl flex-col">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
            adipisci amet architecto assumenda atque culpa, delectus dolor
            dolores doloribus est invento
          </p>
          <TypeAnimation
            sequence={[
              "Desarrollador Full-Stack asdljfnsdalkfdnslfsndflmndfjlsfdn",
              1000,
              "Agotamiento de la vida",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
          <button className="px-6 py-6 m-5 w-full sm:w-fit md:w-fit rounded-full bg-white text-black bg-gradient-to-br from-blue-500 via-pink-300 to-red-400">
            Hire me
          </button>
          <button className="px-1 py-1 w-full m-5 sm:w-fit md:w-fit rounded-full bg-transparent hover:bg-slate-200 text-white hover:text-black border border-white bg-gradient-to-br from-blue-500 via-pink-300 to-red-400">
            <span className="block bg-black rounded-full p-6">Download CV</span>
          </button>
        </div>
      </div>
    </>
  );
};
