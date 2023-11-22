"use client";
import React, { useState, useEffect } from "react";
import getProject from "./helpers/data";

const ProjectDetails = ({ projectObj }) => {
  const [project, setProject] = useState({});

  useEffect(() => {
    getProject(projectObj).then(setProject);
  }, []);

  return (
    <section className='border-solid border-2 border-indigo-600 p-3 m-3'>
      <article className='project-detail'>
        <h2 className='name-style'>{project.name}</h2>
        {/* <h3 className='projects-style'>{projects[7]}</h3> */}

        {/* <div className='card-btn-container'>
          <a href={projects[6]} type='button' className='btn btn-link'>
            Go to Project
          </a>
          <Link
            to={`/edit/${project.firebaseKey}`}
            type='button'
            className='btn btn-success'
          >
            Edit
          </Link>
          <button
            type='button'
            className='btn btn-outline-danger'
            onClick={handleDelete}
          >
            Delete
          </button>
        </div> */}
      </article>
    </section>
  );
};

export default ProjectDetails;
