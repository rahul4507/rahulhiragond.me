import React from "react";

const Hero = () => (
  <section
    id="home"
    className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-700 to-purple-800 text-white text-center px-4"
  >
    <div className="flex flex-col items-center justify-center min-h-screen  text-white text-center px-26 mt-20">

    <img
      src="/profile.jpg"
      alt="Rahul Hiragond"
      className="rounded-full w-40 mb-6 border-4 border-white shadow-lg sm:w-32 md:w-40 lg:w-40"
    />
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
      Hi, I'm Rahul Hiragond
    </h1>
    <p className="text-base sm:text-lg mb-6 max-w-xl mx-auto">
      🚀 Software Engineer with expertise in scalable backend development and system design.
      Passionate about building robust systems using Python, Django, and modern technologies.
      Currently a Final Year B.Tech Student at MIT Academy of Engineering.
    </p>
    <div className="flex flex-wrap justify-center gap-4 mb-6">
      <div className="bg-white/10 px-4 py-2 rounded-lg">
        <span className="font-semibold">8.90</span> CGPA
      </div>
      <div className="bg-white/10 px-4 py-2 rounded-lg">
        <span className="font-semibold">3★</span> CodeChef
      </div>
      <div className="bg-white/10 px-4 py-2 rounded-lg">
        <span className="font-semibold">300+</span> Problems Solved
      </div>
    </div>
    <div className="flex flex-col sm:flex-row justify-center gap-4 space-y-4 sm:space-y-0 mb-12">
      <a
        href="#projects"
        className="bg-blue-600 text-white border-2 border-white px-8 py-4 rounded-lg shadow-xl hover:bg-white hover:text-blue-600 transition duration-300 transform hover:scale-105"
      >
        View Projects
      </a>
      <a
        href="mailto:rahulhiragond04@gmail.com"
        className="bg-transparent border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-700 transition duration-300 transform hover:scale-105"
      >
        Contact Me
      </a>
      <a
        href="/Rahul-Hiragond.pdf"
        className="bg-blue-600 text-white border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300 transform hover:scale-105"
      >
        Download My Resume
      </a>
    </div>
  </div>
  </section>
);

export default Hero;
