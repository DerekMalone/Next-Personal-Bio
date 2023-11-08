"use client";
import { useState, useEffect } from "react";
import getAllProjects from "../api/data/projects";
import ProjectDetails from "../components/ProjectDetails";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(() => getAllProjects());
  }, []);

  return (
    <h3 className='border-solid border-2 border-indigo-600 p-3 m-3'>
      {projects.map((project) => (
        <ProjectDetails key={project.repoName} projectObj={project.repoName} />
      ))}
    </h3>
  );
}
