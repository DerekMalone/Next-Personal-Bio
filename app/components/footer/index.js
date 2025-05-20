"use client";
import React from "react";

import { Icon } from "@iconify/react";

// TODO: also need to fix linkedin and github to center/be buttons...

const Footer = () => {
  return (
    <footer className='relative bg-blueGray-200 pt-8 pb-6 dark:bg-gray-800'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap text-left lg:text-left'>
          <div className='w-full lg:w-6/12 px-4'>
            <h4 className='text-3xl font-semibold text-blueGray-700'>
              {`Let's keep in touch!`}
            </h4>
            <h5 className='text-lg mt-0 mb-2 text-blueGray-600'>
              Find me on any of these platforms.
            </h5>
            <div className='mt-6 lg:mb-0 mb-6'>
              <ul className='flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0'>
                <li>
                  <a href='https://www.linkedin.com/in/malone-derek/'>
                    <div className='shadow-lg rounded-full outline-none focus:outline-none'>
                      <Icon
                        icon='bi:linkedin'
                        style={{
                          width: "2rem",
                          height: "2rem",
                          color: "#395cd5"
                        }}
                      />
                    </div>
                  </a>
                </li>
                <li className='pl-2'>
                  <a href='https://github.com/DerekMalone'>
                    <div className='shadow-lg rounded-full outline-none focus:outline-none'>
                      <Icon
                        icon='ant-design:github-filled'
                        style={{ width: "2rem", height: "2rem" }}
                      />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='w-full lg:w-6/12 px-4'>
            <div className='flex flex-wrap items-top mb-6'>
              <div className='w-full lg:w-4/12 px-4 ml-auto'>
                <span className='block uppercase text-blueGray-500 text-sm font-semibold mb-2'>
                  Useful Links
                </span>
                <ul className='list-unstyled'>
                  {/* <li>
                    <a
                      className='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'
                      href='/blog'
                    >
                      Blog
                    </a>
                  </li> */}
                  <li>
                    <a
                      className='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'
                      href='https://github.com/DerekMalone'
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'
                      href='/attribution'
                    >
                      Resource Attribution
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='my-6 border-blueGray-300'>
          <div className='flex flex-wrap items-center md:justify-between justify-center'>
            <div className='w-full md:w-4/12 px-4 mx-auto text-center'>
              <div className='text-sm text-blueGray-500 font-semibold py-1'>
                Copyright © <span id='get-current-year'>2023</span>
                <a
                  href='/'
                  className='text-blueGray-500 hover:text-blueGray-800'
                >
                  {" "}
                  Derek Malone
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
