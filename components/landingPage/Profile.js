"use client";
import { CldImage } from "next-cloudinary";
import { Icon } from "@iconify/react";
import AboutMe from "./AboutMe";
// import "boxicons";

const Profile = () => {
  // TODO: Once Supabase is set up, pull about me text from there and display.
  return (
    <>
      <div
        className="w-full
        h-[75vh]
        max-h-[90rem]
        p-24
        overflow-hidden
        block
        z-10 
        relative 

        bg-cover 
        bg-center 
        bg-no-repeat 
        py-1
        bg-[url('../public/images/roan-mnt.png')] 

        
        before:content-['']
        before:absolute
        before:inset-0
        before:block
        before:bg-gradient-to-r
      before:from-slate-500
      before:to-slate-500
        before:opacity-75
        before:z-[-5]
        "
      >
        {/* <div
        className='before:content-[""]
            before:absolute
            before:inset-0
            before:block
            before:bg-gradient-to-r
            before:from-slate-500
            before:to-slate-500
            before:opacity-75
            before:z-[-5]'
      ></div> */}

        <section className='container relative z-30 pt-20 pb-12 sm:pt-[12vh] sm:pb-48 md:pt-[12vh] lg:pt-[22vh] lg:pb-48 '>
          <div className='flex flex-col items-center justify-center lg:flex-row'>
            <article className='rounded-full border-8 border-primary-burgandy opacity-100 shadow-xl'>
              <CldImage
                width={250}
                height={250}
                className='banner-image  rounded-full z-40' // h-48 sm:h-56
                src='Personal Bio Site/2021_11_20_NSS_0020_T_xlyxks.jpg'
                alt='Derek Malone Headshot'
              />
            </article>
            <article className='pt-8 sm:pt-10 lg:pl-8 lg:pt-0'>
              <h1 className='text-center font-header text-4xl text-black sm:text-left sm:text-5xl md:text-6xl'>
                {`Hello I'm Derek Malone!`}
              </h1>
              <div className='flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start'>
                <div className='flex items-center justify-center pl-0 sm:justify-start md:pl-1'>
                  <p className='font-body text-lg uppercase text-black'>
                    {`Let's connect`}
                  </p>
                  <div className='hidden sm:block'>
                    <Icon
                      icon='vaadin:chevron-right'
                      style={{ color: "#8b6474" }}
                    />
                    {/* <box-icon
                      name='chevron-right'
                      color='yellow'
                      size='3xl'
                    ></box-icon> */}
                  </div>
                </div>
                <ul className='flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0'>
                  <li>
                    <a href='https://www.linkedin.com/in/malone-derek/'>
                      <Icon
                        icon='devicon-plain:linkedin'
                        // style={{
                        //   width: "1.2rem",
                        //   height: "1.2rem",
                        //   hover: "yellow"
                        // }}
                        className='hover:text-yellow'
                      />
                      {/* <i className='bx bxl-linkedin text-2xl text-black hover:text-yellow'></i> */}
                    </a>
                  </li>
                  <li className='pl-2'>
                    <a href='https://github.com/DerekMalone'>
                      <Icon
                        icon='ant-design:github-filled'
                        // style={{ "pl-2" }}
                      />
                      {/* <box-icon
                        className='sm-github-logo'
                        type='logo'
                        name='github'
                        color='black '
                        animation='tada-hover'
                        size='2xl'
                      ></box-icon> */}
                    </a>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </section>
      </div>
      <AboutMe /> 
    </>
  );
};

export default Profile;
