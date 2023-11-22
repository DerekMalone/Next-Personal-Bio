import React from "react";

const TechStack = () => {
  return (
    <article>
      <p className='underline'>Current Tech Stack</p>
      <ul className='flex items-center lg:justify-between pt-5 pl-2 sm:flex-wrap sm:justify-start sm:pt-0'>
        <li>
          <box-icon
            className='javascript-logo'
            type='logo'
            name='javascript'
            color='black '
            size='lg'
          ></box-icon>
          <p>JavaScript</p>
        </li>
        <li>
          <box-icon
            className='react-logo'
            type='logo'
            name='react'
            color='black '
            size='lg'
          ></box-icon>
          <p>React</p>
        </li>
        <li>
          <box-icon
            className='pythong-logo'
            type='logo'
            name='python'
            color='black '
            size='lg'
          ></box-icon>
          <p>Python</p>
        </li>
        <li>
          <box-icon
            className='django-logo'
            type='logo'
            name='django'
            color='black '
            size='lg'
          ></box-icon>
          <p>Django</p>
        </li>
        <li>
          <box-icon
            className='typescript-logo'
            type='logo'
            name='typescript'
            color='black '
            size='lg'
          ></box-icon>
          <p>TypeScript</p>
        </li>

        <li>
          <box-icon
            className='html5-logo'
            type='logo'
            name='html5'
            color='black '
            size='lg'
          ></box-icon>
          <p>HTML 5</p>
        </li>
        <li>
          <box-icon
            className='css3-logo'
            type='logo'
            name='css3'
            color='black '
            size='lg'
          ></box-icon>
          <p>CSS 3</p>
        </li>
        <li>
          <box-icon
            className='tailwind-css-logo'
            type='logo'
            name='tailwind-css'
            color='black '
            size='lg'
          ></box-icon>
          <p>Tailwindcss</p>
        </li>
        <li>
          <box-icon
            className='bootstrap-logo'
            type='logo'
            name='bootstrap'
            color='black '
            size='lg'
          ></box-icon>
          <p>Bootstrap</p>
        </li>
        <li>
          <box-icon
            className='sass-logo'
            type='logo'
            name='sass'
            color='black '
            size='lg'
          ></box-icon>
          <p>SASS</p>
        </li>
        <li>
          <box-icon
            className='git-logo'
            type='logo'
            name='git'
            color='black '
            size='lg'
          ></box-icon>
          <p>Git</p>
        </li>
        <li>
          <box-icon
            className='github-logo'
            type='logo'
            name='github'
            color='black '
            size='lg'
          ></box-icon>
          <p>Github</p>
        </li>
        <li>
          <box-icon
            className='firebase-logo'
            type='logo'
            name='firebase'
            color='black '
            size='lg'
          ></box-icon>
          <p>Firebase</p>
        </li>
        <li>
          <box-icon
            className='netlify-logo'
            type='logo'
            name='netlify'
            color='black '
            size='lg'
          ></box-icon>
          <p>Netlify</p>
        </li>
        {/* TODO: Need to ADD: C#, ASP.NET, SQL, Postman, JSON-server, Figma, & prisma */}
      </ul>
    </article>
  );
};

export default TechStack;
