"use client";
import { CldImage } from "next-cloudinary";
import React from "react";
import Banner from "../components/landingPage/Banner";
import Profile from "../components/landingPage/Profile";

export default function HomePage() {
  return (
    <>
      <Banner />
      <Profile />
      <section>
        <h1 className='text-3xl font-bold underline'>
          This is the home page route
        </h1>
      </section>
    </>
  );
}
