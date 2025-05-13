"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ContactMeForm from "../components/contactMe/ContactMeForm";

const Contact = () => {
  const router = useRouter();

  // This function will be called after successful form submission
  const onFormSuccess = () => {
    // Delay to show the success message before redirecting
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  return (
    <div className='mx-20 py-16 md:py-20'>
      <h2 className='text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl'>
        Want to Contact Me?
      </h2>

      {/* The form now handles its own submission logic */}
      <ContactMeForm onSuccess={onFormSuccess} />

      <div className='flex flex-col justify-center pt-16 lg:flex-row'>
        <div className='w-full border-l-2 border-t-2 border-r-2 border-b-2 border-secondary-slate px-6 py-6 sm:py-8 lg:w-1/2'>
          <div className='items-center'>
            <Image
              width={32}
              height={32}
              src='/images/general-logos/phoneLogo.png'
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
            <Image
              width={32}
              height={32}
              src='/images/general-logos/emailLogo.png'
              alt='email logo'
            />
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
