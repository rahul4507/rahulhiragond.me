import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      role="navigation"
      className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white fixed top-0 w-full z-20 shadow-md"
    >
      {/* Brand */}
      <h1 className="text-2xl font-bold">Rahul Hiragond</h1>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-6 text-lg">
        {["home", "about", "skills", "projects", "contact"].map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className="hover:text-gray-300"
              aria-label={`Navigate to ${section} section`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden focus:outline-none"
        aria-label="Toggle navigation menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Mobile Links */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white flex flex-col items-center space-y-4 py-4 shadow-lg z-20 md:hidden">
          {["home", "about", "skills", "projects", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="hover:text-gray-300"
                aria-label={`Navigate to ${section} section`}
                onClick={() => setMenuOpen(false)} // Close menu on link click
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
