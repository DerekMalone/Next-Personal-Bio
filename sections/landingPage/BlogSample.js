"use client";
import getAllBlogs from "@/api/data/blogs";
import React, { useState, useEffect } from "react";

const BlogSample = () => {
  const [demoBlogs, setDemoBlogs] = useState([]);

  useEffect(() => {
    setDemoBlogs(getAllBlogs());
  }, []);

  return (
    <section className='py-16 md:py-20 bg-zinc-font'>
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
