"use client";
import React from "react";
import Image from "next/image";
import phoneLogo from "../../public/images/general-logos/phoneLogo.png";
import emailLogo from "../../public/images/general-logos/emailLogo.png";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Need to resolve form submit and send an email to me from someone.
    console.log("you submited a form");
    router.push("/");
  };

  // TODO: This needs to be reworked.

  return (
    <div className='mx-20 py-16 md:py-20'>
      <h2 className='text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg: text-6xl'>
        Want to Contact Me?
      </h2>
      <form onSubmit={handleSubmit} className='mx-auto w-full pt-10 sm:w-3/4'>
        <div className='flex flex-col md:flex-row'>
          <input
            id='name'
            className='mr-3 w-full rounded border-secondary-slate px-4 py-3 font-body text-black md:w-1/2 lg:mr-5'
            placeholder='Name'
            type='text'
          />
          <input
            id='email'
            className='mt-6 w-full rounded border-secondary-slate px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg: ml-5'
            placeholder='Email'
            type='text'
          />
        </div>
        <textarea
          id='message'
          className='mt-6 w-full rounded border-secondary-slate px-4 py-3 font-body text-black md:mt-8'
          placeholder='Message'
          cols='30'
          rows='10'
        ></textarea>
        <button
          type='submit'
          className='mt-6 flex items-center justify-center rounded bg-primary-green px-8 py-3 text-lg font-bold uppercase text-zinc-font hover:bg-primary-slate'
        >
          Send
        </button>
      </form>
      <div className='flex flex-col justify-center pt-16 lg:flex-row'>
        <div className='w-full border-l-2 border-t-2 border-r-2 border-b-2 border-secondary-slate px-6 py-6 sm:py-8 lg:w-1/2'>
          <div className='items-center'>
            {/* TODO: fix phone image here 
              So next.config.js has the loader set to cloudinary
              this means that all Image tags will utilize cloudinary.
            */}
            <img
              src='../../public/images/general-logos/phoneLogo.png'
              alt='phone logo'
            />
            <p className='pl-2 font-body font-bold uppercase text-secondary-slate lg:text-lg'>
              My Phone
            </p>
            <p className='pt-2 text-left font-body font-bold text-primary-burgandy lg:text-lg'>{`(931) 284-8494`}</p>
          </div>
        </div>
        <div className='w-full border-l-2 border-t-0 border-r-2 border-b-2 border-secondary-slate px-6 py-6 sm:py-8 lg:w-1/2 lg:border-l-0 lg:border-t-2'>
          <div className='items-center'>
            {/* TODO: fix email image here */}
            <Image src={emailLogo} alt='phone logo' />
            <p className='pl-2 font-body font-bold uppercase text-secondary-slate lg:text-lg'>
              My Email
            </p>
            <p className='pt-2 text-left font-body font-bold text-primary-burgandy lg:text-lg'>{`derek.s.malone@gmail.com`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
