import React from "react";
import Typing from "react-typing-animation";

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            <Typing>
              <span>Hi, I'm Kelvin.</span>
              <Typing.Delay ms={1000} />
              <br className="hidden lg:inline-block" />I love building amazing
              websites.
            </Typing>
          </h1>
          <p className="mb-8 leading-relaxed">
            As a web developer, my superpowers occur behind the scenes to make
            websites look great, perform well and faster with impeccable user
            experience. Currently work as a Front End Developer,but i started as
            a Full Stack Developer because i wanted to understand all the
            development of the web. Other than coding, I spend most of my free
            time with friends. I've been trying to read more also, feel free to
            reach out with any book recommendations😉.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./me.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
