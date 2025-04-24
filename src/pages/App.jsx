import React, { useState } from "react";
import "../styles/App.css";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import ContactForm from "../components/ContactForm";
import ModalComponent from "../components/ModalComponent";
import { motion } from "framer-motion";
import { ProjectsData } from "../data/ProjectsData";

export default function Portfolio() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const handleScroll = (id) => {
    const element = document.querySelector(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const openModal = (project) => {
    setCurrentProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentProject(null);
  };

  const projects = ProjectsData;

  return (
    <div
      className="min-h-screen w-full font-sans transition-all duration-300"
      style={{ backgroundColor: "#cbd5e1", color: "#0f172a" }}
    >
      <div
        style={{ backgroundColor: "#02182B" }}
        className="w-full sticky top-0 z-50"
      >
        <Navigation handleScroll={handleScroll} />
      </div>

      <div className="h-8" />
      <Hero handleScroll={handleScroll} />

      {/* Projects Section */}
      <section
        id="projects"
        className="py-40 w-full border-y"
        style={{ backgroundColor: "#cbd5e1", color: "#0f172a" }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.h2
            className="text-4xl font-bold mb-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Projects
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                openModal={openModal}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-40 w-full border-t shadow-inner"
        style={{ backgroundColor: "#cbd5e1", color: "#0f172a" }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
          <ContactForm />
        </div>
      </section>

      <ModalComponent
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        currentProject={currentProject}
      />
    </div>
  );
}
