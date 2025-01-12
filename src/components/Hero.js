import React from "react";

const Hero = () => (
  <section
    id="home"
    className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-800 to-black text-white text-center px-4 pt-20 md:pt-0"
  >
    {/* Logo Image */}
    <img
      src="/logo1.jpg"
      alt="Personal logo of Rahul Hiragond"
      className="rounded-full w-32 sm:w-40 mb-6 border-4 border-blue-500"
      loading="lazy"
    />

    {/* Hero Text */}
    <header>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
        Hello, I'm Rahul Hiragond
      </h1>
      <p className="text-lg md:text-xl mb-6">
        🚀 Backend Developer | Problem Solver | Final Year B.Tech Student
        <br />
        Building scalable, efficient systems with a passion for learning.
      </p>
    </header>

    {/* Resume Download Button */}
    <a
      href="/Rahul_Hiragond_Resume.pdf"
      download
      aria-label="Download Rahul Hiragond's Resume"
      className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105 transition transform duration-300"
    >
      Download My Resume
    </a>
  </section>
);

export default Hero;
