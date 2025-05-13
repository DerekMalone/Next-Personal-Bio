"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ContactMeForm from "../components/contactMe.js/ContactMeForm";

const Contact = () => {
  const router = useRouter();

  // This function will be called after successful form submission
  const onFormSuccess = () => {
    // You can add a delay if you want to show the success message before redirecting
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

// "use client";
// import React, { useReducer } from "react";
// import Image from "next/image";
// import phoneLogo from "../../public/images/general-logos/phoneLogo.png";
// import { useRouter } from "next/navigation";
// import emailLogo from "../../public/images/general-logos/emailLogo.png";
// import ContactMeForm from "../components/contactMe.js/contact-Me-Form";
// import { redirect } from "next/dist/server/api-utils";
// import { Resend } from "resend";
// import { EmailTemplate } from "../components/email-template";
// import { SEND } from "../api/data/send/route";

// const Contact = () => {
//   const router = useRouter();

//   const handleSubmit = async (formData) => {
//     // "use server";

//     // const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
//     const contactName = formData.get("contactName");
//     const email = formData.get("email");
//     const message = formData.get("message");

//     SEND(contactName, email, message);

//     router.push("/");
//   };

//   // TODO: Must figure out how to capture and send my email info dynamically AND bypass cors issue.
//   // this is going to require sending via server component but having issues with that.

//   return (
//     <div className='mx-20 py-16 md:py-20'>
//       <h2 className='text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg: text-6xl'>
//         Want to Contact Me?
//       </h2>
//       <ContactMeForm handleSubmit={handleSubmit} />
//       {/*<form action={handleSubmit} className='mx-auto w-full pt-10 sm:w-3/4'>

//         <div className='flex flex-col md:flex-row'>
//           <input
//             id='contactName'
//             name='contactName'
//             className='mr-3 w-full rounded border-secondary-slate px-4 py-3 font-body text-black md:w-1/2 lg:mr-5'
//             placeholder='Name'
//             type='text'
//           />
//           <input
//             id='email'
//             name='email'
//             className='mt-6 w-full rounded border-secondary-slate px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg: ml-5'
//             placeholder='Email'
//             type='text'
//           />
//         </div>
//         <textarea
//           id='message'
//           name='message'
//           className='mt-6 w-full rounded border-secondary-slate px-4 py-3 font-body text-black md:mt-8'
//           placeholder='Message'
//           cols='30'
//           rows='10'
//         ></textarea>
//         <button
//           // type='submit'
//           className='mt-6 flex items-center justify-center rounded bg-primary-green px-8 py-3 text-lg font-bold uppercase text-zinc-font hover:bg-primary-slate'
//         >
//           Send
//         </button>
//       </form>*/}
//       <div className='flex flex-col justify-center pt-16 lg:flex-row'>
//         <div className='w-full border-l-2 border-t-2 border-r-2 border-b-2 border-secondary-slate px-6 py-6 sm:py-8 lg:w-1/2'>
//           <div className='items-center'>
//             {/* TODO: fix phone image here
//               So next.config.js has the loader set to cloudinary
//               this means that all Image tags will utilize cloudinary.
//             */}
//             <Image
//               width={32}
//               height={32}
//               src='/images/general-logos/phoneLogo.png'
//               alt='phone logo'
//             />
//             <p className='pl-2 font-body font-bold uppercase text-secondary-slate lg:text-lg'>
//               My Phone
//             </p>
//             <p className='pt-2 text-left font-body font-bold text-primary-burgandy lg:text-lg'>{`(931) 284-8494`}</p>
//           </div>
//         </div>
//         <div className='w-full border-l-2 border-t-0 border-r-2 border-b-2 border-secondary-slate px-6 py-6 sm:py-8 lg:w-1/2 lg:border-l-0 lg:border-t-2'>
//           <div className='items-center'>
//             {/* TODO: fix email image here */}
//             <Image
//               width={32}
//               height={32}
//               src='/images/general-logos/emailLogo.png'
//               alt='email logo'
//             />
//             <p className='pl-2 font-body font-bold uppercase text-secondary-slate lg:text-lg'>
//               My Email
//             </p>
//             <p className='pt-2 text-left font-body font-bold text-primary-burgandy lg:text-lg'>{`derek.s.malone@gmail.com`}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
