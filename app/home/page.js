"use client";
import Image from "next/image";
import React from "react";

export default function HomePage() {
  return (
    <section>
      <div className='image-container'>
        <Image
          // fill={true}
          width={2000}
          height={190}
          className='banner-image'
          src='https://res.cloudinary.com/dingomalone/image/upload/v1680299032/Personal%20Bio%20Site/IMG_6109_tfmtta_168a0c.jpg'
          alt='panorama of mountains'
        />
      </div>

      <h1>This is the home page route</h1>
    </section>
  );
}
