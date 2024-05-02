"use client";
import React, { useState } from "react";

import { Icon } from "@iconify/react";

// TODO: Pull in all images and apply styling.

const TechStack = () => {
  // const [showInfo, setShowInfo] = useState(false);

  const [hoveredIcon, setHoveredIcon] = useState(null);

  // Function to handle mouse enter event
  const handleMouseEnter = (iconId) => {
    setHoveredIcon(iconId);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <article className='w-full pl-6 pt-10 pr-8 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0'>
      <ul className='flex flex-wrap items-center justify-evenly pt-5 pl-2 sm:pt-0'>
        <li
          className='relative hover-'
          onMouseEnter={() => handleMouseEnter("javascript")}
          onMouseLeave={handleMouseLeave}
        >
          <Icon
            icon='openmoji:javascript'
            style={{ width: "3rem", height: "3rem" }}
          />
          {hoveredIcon === "javascript" && (
            <div className='absolute top-full left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-white border border-gray-200 rounded shadow-md z-10'>
              <p>JavaScript</p>
            </div>
          )}
        </li>
        <li
          className='relative hover-'
          onMouseEnter={() => handleMouseEnter("react")}
          onMouseLeave={handleMouseLeave}
        >
          <Icon
            icon='skill-icons:react-dark'
            style={{ width: "3rem", height: "3rem" }}
          />
          {hoveredIcon === "react" && (
            <div className='absolute top-full left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-white border border-gray-200 rounded shadow-md z-10'>
              <p>React</p>
            </div>
          )}
        </li>
        <li
          className='relative hover-'
          onMouseEnter={() => handleMouseEnter("python")}
          onMouseLeave={handleMouseLeave}
        >
          <Icon
            icon='vscode-icons:file-type-python'
            style={{ width: "3rem", height: "3rem" }}
          />
          {hoveredIcon === "python" && (
            <div className='absolute top-full left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-white border border-gray-200 rounded shadow-md z-10'>
              <p>Python</p>
            </div>
          )}
        </li>
        <li
          className='relative hover-'
          onMouseEnter={() => handleMouseEnter("django")}
          onMouseLeave={handleMouseLeave}
        >
          <Icon
            icon='vscode-icons:file-type-django'
            style={{ width: "3rem", height: "3rem" }}
          />
          {hoveredIcon === "django" && (
            <div className='absolute top-full left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-white border border-gray-200 rounded shadow-md z-10'>
              <p>Django</p>
            </div>
          )}
        </li>
        <li
          className='relative hover-'
          onMouseEnter={() => handleMouseEnter("typescript")}
          onMouseLeave={handleMouseLeave}
        >
          <Icon
            icon='vscode-icons:file-type-typescript-official'
            style={{ width: "3rem", height: "3rem" }}
          />
          {hoveredIcon === "typescript" && (
            <div className='absolute top-full left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-white border border-gray-200 rounded shadow-md z-10'>
              <p>TypeScript</p>
            </div>
          )}
        </li>
        <li
          className='relative hover-'
          onMouseEnter={() => handleMouseEnter("html5")}
          onMouseLeave={handleMouseLeave}
        >
          <Icon
            icon='vscode-icons:file-type-html'
            style={{ width: "3rem", height: "3rem" }}
          />
          {hoveredIcon === "html5" && (
            <div className='absolute top-full left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-white border border-gray-200 rounded shadow-md z-10'>
              <p>HTML5</p>
            </div>
          )}
        </li>
        <li
          className='relative hover-'
          onMouseEnter={() => handleMouseEnter("css3")}
          onMouseLeave={handleMouseLeave}
        >
          <Icon
            icon='vscode-icons:file-type-css'
            style={{ width: "3rem", height: "3rem" }}
          />
          {hoveredIcon === "css3" && (
            <div className='absolute top-full left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-white border border-gray-200 rounded shadow-md z-10'>
              <p>CSS3</p>
            </div>
          )}
        </li>
        <li
          className='relative hover-'
          onMouseEnter={() => handleMouseEnter("tailwind-css")}
          onMouseLeave={handleMouseLeave}
        >
          {" "}
          <Icon
            icon='vscode-icons:file-type-tailwind'
            style={{ width: "3rem", height: "3rem" }}
          />
          {hoveredIcon === "tailwind-css" && (
            <div className='absolute top-full left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-white border border-gray-200 rounded shadow-md z-10'>
              <p>Tailwind CSS</p>
            </div>
          )}
        </li>
        <li
          className='relative hover-'
          onMouseEnter={() => handleMouseEnter("bootstrap")}
          onMouseLeave={handleMouseLeave}
        >
          <Icon
            icon='akar-icons:bootstrap-fill'
            style={{ width: "3rem", height: "3rem", color: "#772fb3" }}
          />
          {hoveredIcon === "bootstrap" && (
            <div className='absolute top-full left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-white border border-gray-200 rounded shadow-md z-10'>
              <p>Bootstrap</p>
            </div>
          )}
        </li>
        <li
          className='relative hover-'
          onMouseEnter={() => handleMouseEnter("sass")}
          onMouseLeave={handleMouseLeave}
        >
          <Icon
            icon='vscode-icons:file-type-sass'
            style={{ width: "3rem", height: "3rem" }}
          />
          {hoveredIcon === "sass" && (
            <div className='absolute top-full left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-white border border-gray-200 rounded shadow-md z-10'>
              <p>SASS</p>
            </div>
          )}
        </li>
        <li
          className='relative hover-'
          onMouseEnter={() => handleMouseEnter("github")}
          onMouseLeave={handleMouseLeave}
        >
          <Icon
            icon='ant-design:github-filled'
            style={{ width: "3rem", height: "3rem" }}
          />
          {hoveredIcon === "github" && (
            <div className='absolute top-full left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-white border border-gray-200 rounded shadow-md z-10'>
              <p>Github</p>
            </div>
          )}
        </li>
        <li
          className='relative hover-'
          onMouseEnter={() => handleMouseEnter("firebase")}
          onMouseLeave={handleMouseLeave}
        >
          <Icon
            icon='vscode-icons:file-type-firebase'
            style={{ width: "3rem", height: "3rem" }}
          />
          {hoveredIcon === "firebase" && (
            <div className='absolute top-full left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-white border border-gray-200 rounded shadow-md z-10'>
              <p>Firebase</p>
            </div>
          )}
        </li>
        <li
          className='relative hover-'
          onMouseEnter={() => handleMouseEnter("git")}
          onMouseLeave={handleMouseLeave}
        >
          <Icon
            icon='teenyicons:git-outline'
            style={{ width: "3rem", height: "3rem" }}
          />
          {hoveredIcon === "git" && (
            <div className='absolute top-full left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-white border border-gray-200 rounded shadow-md z-10'>
              <p>Git</p>
            </div>
          )}
        </li>
        <li
          className='relative hover-'
          onMouseEnter={() => handleMouseEnter("netlify")}
          onMouseLeave={handleMouseLeave}
        >
          {" "}
          <Icon
            icon='vscode-icons:file-type-light-netlify'
            style={{ width: "3rem", height: "3rem" }}
          />
          {hoveredIcon === "netlify" && (
            <div className='absolute top-full left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-white border border-gray-200 rounded shadow-md z-10'>
              <p>Netlify</p>
            </div>
          )}
        </li>
        <li
          className='relative hover-'
          onMouseEnter={() => handleMouseEnter("materialui")}
          onMouseLeave={handleMouseLeave}
        >
          <Icon
            icon='mdi:material-ui'
            style={{ width: "3rem", height: "3rem", color: "#395cd5" }}
          />
          {hoveredIcon === "materialui" && (
            <div className='absolute top-full left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-white border border-gray-200 rounded shadow-md z-10'>
              <p>MaterialUI</p>
            </div>
          )}
        </li>
        {/* <li
          className='relative hover-'
          onMouseEnter={() => handleMouseEnter("json-server")}
          onMouseLeave={handleMouseLeave}
        >
          <Icon icon='' style={{ width: "3rem", height: "3rem" }} />
          {hoveredIcon === "json-server" && (
            <div className='absolute top-full left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-white border border-gray-200 rounded shadow-md'>
              <p>JSON-server</p>
            </div>
          )}
        </li> */}
      </ul>
    </article>
  );
};

export default TechStack;
