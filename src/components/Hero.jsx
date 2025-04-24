import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaChevronDown, FaFileAlt } from "react-icons/fa";

function Hero({ handleScroll }) {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center min-h-screen w-full shadow-inner border-b"
      style={{ backgroundColor: "#02182B", color: "#ffffff" }} // Dark blue background with white text
    >
      <motion.img
        src="src/assets/DSC_0089 2x2.JPG"
        alt="Portfolio Image"
        className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-4 shadow-xl ring-4 ring-blue-500 object-cover"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.h1
        className="text-5xl font-bold mb-2 tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hi 👋 I am Antonio Miguel Cariño
      </motion.h1>

      <p className="text-xl mb-8 text-gray-300">
        <Typewriter
          words={["BackEnd Developer", "Entry-Level Data Scientist", "AI Engineer"]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </p>

      <div className="flex items-center gap-3">
        <button
          onClick={() => handleScroll("#contact")}
          style={{ backgroundColor: "#69b67e", color: "#ffffff" }}
          className="px-6 py-2 rounded-lg font-semibold shadow hover:opacity-90 transition-all"
        >
          Get In Touch
        </button>

        <a
          href="/public/Cariño_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: "#6c757d", color: "#ffffff" }}
          className="p-2 rounded-lg shadow hover:opacity-90 transition-all"
        >
          <FaFileAlt size={20} />
        </a>
      </div>

      <FaChevronDown
        className="text-gray-400 mt-10 text-3xl animate-bounce cursor-pointer"
        onClick={() => handleScroll("#projects")}
      />
    </section>
  );
}

export default Hero;
