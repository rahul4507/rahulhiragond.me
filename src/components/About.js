import React from "react";

const About = () => (
  <section id="about" className="min-h-screen py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-8 text-center text-blue-700">About Me</h2>

      <div className="mb-12 space-y-6">
        <p className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 text-center">
          I am a Software Engineer with deep expertise in scalable backend development, system design, and third-party API integrations.
          Currently pursuing my B.Tech in Computer Science at MIT Academy of Engineering with a CGPA of 8.90, I combine academic excellence
          with practical experience.
        </p>
        <p className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 text-center">
          At Bynry Inc., I've successfully implemented high-performance solutions, reducing API response times to under 400ms and designing
          systems that handle thousands of notifications per minute. I'm passionate about solving complex problems through clean, efficient code.
        </p>
      </div>

      <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-xl p-8 text-center max-w-4xl mx-auto shadow-lg">
        <h3 className="text-2xl font-bold mb-6">Programming Achievements</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-gradient-to-r from-green-400 to-teal-500 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <p className="font-bold text-xl mb-2 text-white">CodeChef</p>
            <p className="text-white">3★ Rated (1601)</p>
            <p className="text-sm text-white">200+ Problems</p>
          </div>
          <div className="p-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <p className="font-bold text-xl mb-2 text-white">LeetCode</p>
            <p className="text-white">Active Solver</p>
            <p className="text-sm text-white">100+ Problems</p>
          </div>
          <div className="p-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <p className="font-bold text-xl mb-2 text-white">CodeForces</p>
            <p className="text-white">Newbie (1135)</p>
            <p className="text-sm text-white">300+ Problems</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
