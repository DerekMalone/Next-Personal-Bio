"use client";
import { CldImage } from "next-cloudinary";
import React from "react";
import Banner from "../components/landingPage/Banner";
import Profile from "../components/landingPage/Profile";
import FocusProjects from "../components/landingPage/FocusProjects";
import QuickContactMe from "../components/landingPage/QuickContactMe";

export default function HomePage() {
  return (
    <div className='relative bg-cover bg-center bg-no-repeat'>
      <div>
        {/* can add style to above div and add background image if needed (need to look up how to do this in Next) */}
        {/* <Banner /> */}
        <Profile />
        <FocusProjects />
        <QuickContactMe />
      </div>
    </div>
  );
}
