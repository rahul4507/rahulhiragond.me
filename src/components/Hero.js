import React from "react";

const Hero = () => (
  <section
    id="home"
    className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-800 to-black text-white text-center px-4"
  >
    <img
      src="/logo1.jpg"
      alt="Rahul's Logo"
      className="rounded-full w-40 mb-6 border-4 border-blue-500"
    />
    <h1 className="text-5xl font-bold mb-4">Hello, I'm Rahul Hiragond</h1>
    <p className="text-xl mb-6">
      🚀 Backend Developer | Problem Solver | Final Year B.Tech Student Building
      scalable, efficient systems with a passion for learning.
    </p>
    <a
      href="/resume.pdf"
      download
      className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
    >
      Download My Resume
    </a>
  </section>
);

export default Hero;
