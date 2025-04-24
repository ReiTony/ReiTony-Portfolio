import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectCard = React.memo(function ProjectCard({
  project,
  darkMode,
}) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal((prev) => !prev);

  return (
    <Card
      key={project.id}
      className={`project-card w-full max-w-lg mx-auto shadow-lg rounded-2xl p-8 transition-all ${
        darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
      }`}
    >
      <CardContent className="p-6 flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-center">{project.title}</h2>
        <p className="mt-3 text-lg text-left leading-relaxed">{project.description}</p>

        {/* Single View Project Button */}
        <div className="mt-6 w-full flex justify-center">
          <Button
            className="min-w-[100px] bg-gray-600 hover:bg-gray-500 shadow text-white"
            size="sm"
            onClick={toggleModal}
          >
            View Project
          </Button>
        </div>
      </CardContent>

      {/* Modal for Specifications */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h3 className="text-2xl font-semibold">{project.title} Specifications</h3>
            <p className="mt-4">{project.specifications}</p>

            {/* Dynamic Buttons Based on Project Type */}
            <div className="mt-4 flex justify-end gap-4">
              <Button
                className="bg-gray-600 hover:bg-gray-500 text-white"
                size="sm"
                onClick={() => window.open(project.githubLink, "_blank")}
              >
                GitHub
              </Button>

              {project.downloadAppLink ? (
                <Button
                  className="bg-green-500 hover:bg-green-600 text-white"
                  size="sm"
                  onClick={() => window.open(project.downloadAppLink, "_blank")}
                >
                  Download App
                </Button>
              ) : (
                <Button
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                  size="sm"
                  onClick={() => window.open(project.websiteLink, "_blank")}
                >
                  Visit Website
                </Button>
              )}
            </div>

            {/* Close Modal Button */}
            <div className="mt-4 flex justify-end">
              <Button
                className="bg-red-600 hover:bg-red-500 text-white"
                size="sm"
                onClick={toggleModal}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
});

export default ProjectCard;
