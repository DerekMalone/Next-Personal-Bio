// import { CldImage } from "next-cloudinary";
import dynamic from "next/dynamic";
import React from "react";
// import Banner from "../components/landingPage/Banner";
import Profile from "../components/landingPage/Profile";
// import AboutMe from "../components/landingPage/AboutMe";
// import BlogSample from "../components/landingPage/BlogSample";

// const DynamicProfile = dynamic(
//   () => import("../components/landingPage/Profile"),
//   { ssr: false, loading: () => <p>Loading...</p> }
// );

// const DynamicAboutMe = dynamic(
//   () => import("../components/landingPage/AboutMe"),
//   { ssr: false, loading: () => <p>Loading...</p> }
// );

// const DynamicBlogSample = dynamic(
//   () => import("../components/landingPage/BlogSample"),
//   { ssr: false, loading: () => <p>Loading...</p> }
// );

export default function HomePage() {
  return (
    <div className='relative bg-cover bg-center bg-no-repeat'>
      <div>
        {/* can add style to above div and add background image if needed (need to look up how to do this in Next) */}
        {/* <Banner /> */}
        <Profile />
        {/* <DynamicProfile /> */}
        {/* <DynamicAboutMe /> */}
        {/* <AboutMe /> */}
        {/* <DynamicBlogSample /> */}
      </div>
    </div>
  );
}
