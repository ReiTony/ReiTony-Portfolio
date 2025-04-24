import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectCard = React.memo(function ProjectCard({
  project,
  darkMode,
  openModal,
}) {
  return (
    <Card
      key={project.id}
      className={`project-card w-full max-w-lg mx-auto shadow-lg rounded-2xl p-8 transition-all ${
        darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
      }`}
    >
      <CardContent className="p-6 flex flex-col items-center">
        <h2 className="text-2xl font-semibold">{project.title}</h2>
        <p className="mt-3 text-lg text-center">{project.description}</p>

        {/* Wrapper for Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button
            className="min-w-[100px] bg-gray-600 hover:bg-gray-500 shadow text-white"
            size="sm"
          >
            GitHub
          </Button>
          <Button
            className="min-w-[100px] bg-blue-500 hover:bg-blue-600 shadow text-white"
            size="sm"
          >
            Visit Website
          </Button>
          <Button
            className="min-w-[100px] bg-green-500 hover:bg-green-600 shadow text-white"
            size="sm"
            onClick={() => openModal(project)}
          >
            Specifications
          </Button>
        </div>
      </CardContent>
    </Card>
  );
});

export default ProjectCard;
