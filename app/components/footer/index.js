"use client";
import React from "react";

import { Icon } from "@iconify/react";

// TODO: also need to fix linkedin and github to center/be buttons...

const Footer = () => {
  return (
    // <footer className='relative bg-blueGray-200 pt-8 pb-6 dark:bg-gray-800'>
    //   <div className='container mx-auto px-4'>
    //     <div className='flex flex-wrap text-left lg:text-left'>
    //       <div className='w-full lg:w-6/12 px-4'>
    //         <div className='flex flex-wrap items-top mb-6'>
    //           <div className='w-full lg:w-4/12 px-4 ml-auto'>
    //             <span className='block uppercase text-blueGray-500 text-sm font-semibold mb-2'>
    //               Useful Links
    //             </span>
    //             <ul className='list-unstyled'>
    //               {/* <li>
    //                 <a
    //                   className='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'
    //                   href='/blog'
    //                 >
    //                   Blog
    //                 </a>
    //               </li> */}
    //               <li>
    //                 <a
    //                   className='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'
    //                   href='https://github.com/DerekMalone'
    //                 >
    //                   Github
    //                 </a>
    //               </li>
    //               <li>
    //                 <a
    //                   className='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'
    //                   href='/attribution'
    //                 >
    //                   Resource Attribution
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className='my-6 border-blueGray-300'>
    //       <div className='flex flex-wrap items-center md:justify-between justify-center'>
    //         <div className='w-full md:w-4/12 px-4 mx-auto text-center'>
    //           <div className='text-sm text-blueGray-500 font-semibold py-1'>
    //             Copyright © <span id='get-current-year'>2023</span>
    //             <a
    //               href='/'
    //               className='text-blueGray-500 hover:text-blueGray-800'
    //             >
    //               {" "}
    //               Derek Malone
    //             </a>
    //             .
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <footer className='bg-blueGray-200 dark:bg-gray-800 py-6'>
  <div className='container mx-auto px-4'>
    <div className='flex flex-col md:flex-row md:justify-between items-center gap-4'>
      {/* Links Section */}
      <div>
        <span className='block uppercase text-blueGray-500 text-sm font-semibold mb-2'>
          Useful Links
        </span>
        <ul className='flex flex-col sm:flex-row gap-4'>
          <li>
            <a
              className='text-blueGray-600 hover:text-blueGray-800 font-semibold text-sm'
              href='https://github.com/DerekMalone'
            >
              Github
            </a>
          </li>
          <li>
            <a
              className='text-blueGray-600 hover:text-blueGray-800 font-semibold text-sm'
              href='/attribution'
            >
              Resource Attribution
            </a>
          </li>
        </ul>
      </div>

      {/* Copyright Section */}
      <div className='text-center md:text-right'>
        <div className='text-sm text-blueGray-500 font-semibold'>
          Copyright © 2023{' '}
          <a
            href='/'
            className='text-blueGray-500 hover:text-blueGray-800'
          >
            Derek Malone
          </a>
          .
        </div>
      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer;
