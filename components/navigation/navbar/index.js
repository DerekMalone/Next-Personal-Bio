import React, { useState } from "react";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";

export default function NavBar() {
  const [menuStatus, setMenuStatus] = useState(false);
  const toggleMenu = () => {
    setMenuStatus(!menuStatus);
  };


  return (
    <nav className='w-full  p-5 uppercase z-50 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-600' >
      <div className='flex justify-between items-center mx-12'>
        <a href='/'>
          <Image
            width='64'
            height='64'
            src='/images/personal-logos/transparent-DM-logo.png'
            className='h-16 dmLogo dark:filter dark:invert dark:grayscale-100'
            alt='Logo'
          />
        </a>
        {/* Burger menu icon for small screens */}
        <div className='lg:hidden '>
          <button
            onClick={toggleMenu}
            className='text-black dark:text-gray-100 focus:outline-none cursor-pointer'
          >
            {menuStatus ? (
              // Render X icon when the menu is open
              <svg
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                ></path>
              </svg>
            ) : (
              // Render burger icon when the menu is closed
              <svg
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16m-7 6h7'
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Overlay to capture clicks and close the menu */}
        {menuStatus && (
          <div
            className='fixed inset-0 opacity-50 z-10'
            onClick={toggleMenu}
          ></div>
        )}

        <ul
          className={`lg:flex lg:space-x-8 lg:items-center lg:justify-center content-end font-semibold ${
            menuStatus
              ? "flex flex-col items-start justify-between gap-2 opacity-75 fixed z-40 border-l-2 border-b-2 border-gray-600  dark:border-l-2 dark:border-b-2 dark:border-gray-100 dark:text-white right-0 top-[6.5rem] w-21/5 h-auto rounded-bl-2xl rounded-br-none shadow-xl p-8 bg-gradient-to-t from-gray-200 to-gray-50 dark:bg-gradient-to-tr dark:from-gray-900 dark:to-slate-600"
              : "hidden"
          }`}
        >
          {" "}
          {/* className='hidden md:flex gap-x-6 text-white' */}
          <li className=" py-2 w-full">
            <Link href='/'>
              <p>Home</p>
            </Link>
          </li>
          <li className=" py-2 w-full">
            <Link href='/portfolio'>
              <p>Portfolio</p>
            </Link>
          </li>
          <li className=" py-2 w-full">
            <Link href='/contact'>
              <p>Contact</p>
            </Link>
          </li>
          {/* <li>
            <Link href='/blog'>
              <p>Blog</p>
            </Link>
          </li> */}
          {/* <Button /> */}
        </ul>
        {/* </div>
          </div>
        </div> */}
      </div>
    </nav>
  );
}
