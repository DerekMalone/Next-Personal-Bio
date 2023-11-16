import React from "react";
import Link from "next/link";
import Button from "./Button";
// import Logo from "./Logo";

export default function NavBar() {
  return (
    <>
      <div className='p-3 w-full h-20 bg-slate-500 sticky top-0'>
        <div className='container mx-auto px-4 h-full'>
          <div className='flex justify-between items-center h-full'>
            {/* <Logo /> */}
            <ul className='hidden md:flex gap-x-6 text-white'>
              <li>
                <Link href='/'>
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href='/projects'>
                  <p>Projects</p>
                </Link>
              </li>
              <li>
                <Link href='/tech-stack'>
                  <p>Tech Stack</p>
                </Link>
              </li>
              <li>
                <Link href='/contact'>
                  <p>Contact</p>
                </Link>
              </li>
            </ul>
            <Button />
          </div>
        </div>
      </div>
    </>
  );
}
