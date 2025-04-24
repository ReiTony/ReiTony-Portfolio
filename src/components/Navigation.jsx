import React from "react";

function Navigation({ handleScroll }) {
  return (
    <nav
      className="fixed top-0 left-0 w-full py-4 px-6 flex flex-col md:flex-row items-center justify-between shadow-md z-50"
      style={{ backgroundColor: '#f8fafc' }}
    >
      <h1 className="text-2xl font-extrabold tracking-wide">Portfolio</h1>
      <ul className="flex flex-col md:flex-row md:justify-center space-y-2 md:space-y-0 md:space-x-6 w-full md:w-auto">
        <li>
          <button
            onClick={() => handleScroll("#hero")}
            className="hover:text-blue-400 font-medium"
          >
            Me
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll("#projects")}
            className="hover:text-blue-400 font-medium"
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll("#contact")}
            className="hover:text-blue-400 font-medium"
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
