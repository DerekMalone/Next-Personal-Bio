"use client";
import React, { useState, useEffect } from "react";
import getProject from "../api/data/projectsData";
import Image from "next/image";

const ProjectDetails = ({ projectName, projectImg }) => {
  const [project, setProject] = useState({});

  useEffect(() => {
    getProject(projectName).then(setProject);
  }, []);



  return (
    <section className='mx-auto transform transition-all hover:scale-105 md:mx-0'>
      <h2 className='text-center pt-8 text-lg font-semibold uppercase text-primary-green group-hover:text-black group-hover:drop-shadow-xl lg:text-xl'>
        {project.name}
      </h2>
      <a href={project.html_url} type='button' className='btn btn-link'>
        <img
          className='w-full shadow'
          src={projectImg}
          alt={`${project.name} screenshot`}
        />
      </a>
    </section>
  );
};

export default ProjectDetails;
