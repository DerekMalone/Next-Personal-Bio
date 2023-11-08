"use client";
import { CldImage } from "next-cloudinary";
import React from "react";
import Banner from "../components/landingPage/Banner";
import Profile from "../components/landingPage/Profile";
import FocusProjects from "../components/landingPage/FocusProjects";
import QuickContactMe from "../components/landingPage/QuickContactMe";

export default function HomePage() {
  return (
    <>
      <Banner />
      <section className='border-solid border-2 border-indigo-600 p-3 m-3'>
        <h1 className='text-3xl font-bold underline text-center'>
          This is the home page route
        </h1>
      </section>
      <Profile />
      <FocusProjects />
      <QuickContactMe />
    </>
  );
}
