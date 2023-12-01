"use client";
import React, { useState, useEffect } from "react";
import getProject from "./helpers/data";
import Image from "next/image";

const ProjectDetails = ({ projectName }) => {
  const [project, setProject] = useState({});

  useEffect(() => {
    getProject(projectName).then(setProject);
  }, []);

  // TODO: Need to pull screenshots of each landing page for project and display that here instead of text...

  return (
    <section className='mx-auto transform transition-all hover:scale-105 md:mx-0'>
      <h2 className='text-center pt-8 text-lg font-semibold uppercase text-primary-green group-hover:text-black group-hover:drop-shadow-xl lg:text-xl'>
        {projectName}
      </h2>
      <a href={project.html_url} type='button' className='btn btn-link'>
        <img
          className='w-full shadow'
          src='https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt={`${project.name} screenshot`}
        />
      </a>
    </section>
  );
};

export default ProjectDetails;
