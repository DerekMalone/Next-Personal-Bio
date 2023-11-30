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
    <section className='py-16 md:py-20 border border-orange-500 border-solid'>
      <h1 className='text-center font-header text-4xl font-semibold uppercase text-primary-slate sm:text-5xl lg:text-6xl'>
        Most Recent Blogs{" "}
      </h1>
      <div className='grid grid-cols-1 gap6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3'>
        {demoBlogs.map((blog) => (
          <section
            key={blog.id}
            className='group rounded px-8 py-12 shadow hover:bg-primary-green'
          >
            {/* <div className='mx-auto h24 w-24 text-center xl:h-28 xl:w-28'>
              <div className='hidden group-hover:block'><img src='' alt='' icon></div>
            </div> */}
            <div className='text-center'>
              <h3 className='pt-8 text-lg font-semibold uppercase text-primary-slate group-hover:text-black group-hover:drop-shadow-xl lg:text-xl'>
                {blog.title}
              </h3>
              <div></div>
              <p className='text-secondary-slate pt-4 text-sm group-hover:text-zinc-font md:text-black'>
                {blog.text}
              </p>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default BlogSample;
