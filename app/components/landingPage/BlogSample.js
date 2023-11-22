"use client";
import React, { useState } from "react";

const BlogSample = () => {
  const [demoBlogs, setDemoBlogs] = useState([
    {
      id: 1,
      title: "Sample Title 1",
      text: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet est placerat in egestas erat. Rhoncus urna neque viverra justo nec ultrices dui. Nisl pretium fusce id velit ut tortor pretium. Leo vel fringilla est ullamcorper eget...",
    },
    {
      id: 2,
      title: "Sample Title 2",
      text: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet est placerat in egestas erat. Rhoncus urna neque viverra justo nec ultrices dui. Nisl pretium fusce id velit ut tortor pretium. Leo vel fringilla est ullamcorper eget...",
    },
    {
      id: 3,
      title: "Sample Title 3",
      text: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet est placerat in egestas erat. Rhoncus urna neque viverra justo nec ultrices dui. Nisl pretium fusce id velit ut tortor pretium. Leo vel fringilla est ullamcorper eget...",
    },
  ]);

  return (
    <section className='border border-orange-500 border-solid'>
      <h1 className='text-center font-semibold text-lg p-4'>
        Most Recent Blogs{" "}
      </h1>
      <div className='flex flex-wrap justify-around'>
        {demoBlogs.map((blog) => (
          <section
            key={blog.id}
            className='border border-orange-500 border-solid w-72 m-4'
          >
            <h3>{blog.title}</h3>
            <div></div>
            <p>{blog.text}</p>
          </section>
        ))}
      </div>
    </section>
  );
};

export default BlogSample;
