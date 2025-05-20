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
      <h2 className='block sm:hidden text-center font-header text-3xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl'>
        Message Me
      </h2>
      <h2 className='hidden sm:block sm:text-center sm:font-header sm:text-4xl sm:font-semibold sm:uppercase sm:text-primary sm:text-5xl lg:text-6xl'>
        By All Means, Reach Out
      </h2>

      {/* The form now handles its own submission logic */}
      <ContactMeForm onSuccess={onFormSuccess} />

      <div className='flex flex-col justify-center pt-16 lg:flex-row'>
        <div className='w-full border-l-2 border-t-2 border-r-2 border-b-2 border-secondary-slate px-6 py-6 sm:py-8 lg:w-1/2'>
          <div className='flex flex-col justify-center items-center'>
            <Image
              className="dark:filter dark:invert"
              width={32}
              height={32}
              src='/images/general-logos/phoneLogo.png'
              alt='phone logo'
            />
            <p className='pt-2 text-left font-body font-bold text-primary-burgandy lg:text-lg'>{`(931) 284-8494`}</p>
          </div>
        </div>
        <div className='w-full border-l-2 border-t-0 border-r-2 border-b-2 border-secondary-slate px-6 py-6 sm:py-8 lg:w-1/2 lg:border-l-0 lg:border-t-2'>
          <div className='flex flex-col justify-center place-items-center'>
            <Image
              className="dark:filter dark:invert"
              width={32}
              height={32}
              src='/images/general-logos/emailLogo.png'
              alt='email logo'
            />
            <p className='pt-2 text-left text-xs font-body font-bold text-primary-burgandy sm:text-lg'>{`derek.s.malone@gmail.com`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
