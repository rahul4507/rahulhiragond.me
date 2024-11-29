import React from "react";

const Navbar = () => (
  <nav className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white fixed top-0 w-full z-10 shadow-md">
    <h1 className="text-2xl font-bold">Rahul Hiragond</h1>
    <ul className="flex space-x-6 text-lg">
      <li>
        <a href="#home" className="hover:text-gray-300">
          Home
        </a>
      </li>
      <li>
        <a href="#about" className="hover:text-gray-300">
          About
        </a>
      </li>
      <li>
        <a href="#skills" className="hover:text-gray-300">
          Skills
        </a>
      </li>
      <li>
        <a href="#projects" className="hover:text-gray-300">
          Projects
        </a>
      </li>
      <li>
        <a href="#contact" className="hover:text-gray-300">
          Contact
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
