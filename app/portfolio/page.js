"use client";
import React, { useState, useEffect } from "react";
import { getAllProjects } from "../api/data/projects";
import ProjectDetails from "../components/ProjectDetails";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(getAllProjects());
  }, []);

  return (
    <section className='mx-20 py-16 md:py-20'>
      <h2 className='text-center font-header text-4xl font-semibold uppercase text-primary-slate sm:text-5xl lg:text-6xl'>
        Check out my Portfolio
      </h2>
      <div className='mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2'>
        {projects?.map((project) => (
          <ProjectDetails
            key={project.repoName}
            projectName={project.repoName}
            projectImg={project.image}
          />
        ))}
      </div>
    </section>
  );
}
