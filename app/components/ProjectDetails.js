"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import getProject from "./helpers/data";

const ProjectDetails = ({ projectObj }) => {
  const [project, setProject] = useState({});
  const router = useRouter()

  useEffect(() => {
    getProject(projectObj).then(setProject);
  }, []);

  const routeNavigate = () => {
    router.push(`${project.html_url}`)
  }

  return (
    
<section class="m-3 mx-auto max-w-md rounded-lg bg-white shadow">
  <article class="p-4">
    <h3 class="text-xl font-medium text-gray-900">Migrating to Sailboat UI: {project.name}</h3>
    <p class="mt-1 text-gray-500">{project.description}</p>
    <div className="flex justify-center">
    <button type="button" className="content-cetner bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => routeNavigate()}>Link: {project.name}</button>
    </div>
  </article>
</section>

  );
};

export default ProjectDetails;
