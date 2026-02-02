"use client";
import { CldImage } from "next-cloudinary";
import { Icon } from "@iconify/react";
import AboutMe from "./AboutMe";

const Profile = () => {
  return (
    <>
      <div className="w-full h-[75vh] max-h-[90rem] p-24 overflow-hidden relative">
        {/* Background images - light/dark mode */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat dark:hidden"
          style={{ backgroundImage: "url('/background_texture_light_mode.png')" }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden dark:block"
          style={{ backgroundImage: "url('/background_texture_dark_mode.png')" }}
        />

        <section className="container relative z-10 pt-20 pb-12 sm:pt-[12vh] sm:pb-48 md:pt-[12vh] lg:pt-[22vh] lg:pb-48">
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <article className="rounded-full border-8 border-brand-brown opacity-100 shadow-xl">
              <CldImage
                width={250}
                height={250}
                className='banner-image  rounded-full z-40' // h-48 sm:h-56
                src='Personal Bio Site/2021_11_20_NSS_0020_T_xlyxks.jpg'
                alt='Derek Malone Headshot'
              />
            </article>
            <article className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
              <h1 className="text-center font-header text-4xl text-brand-dark dark:text-brand-light sm:text-left sm:text-5xl md:text-6xl">
                {`Hello I'm Derek Malone!`}
              </h1>
              <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                  <p className="font-body text-lg uppercase text-brand-dark dark:text-brand-light">
                    {`Let's connect`}
                  </p>
                  <div className="hidden sm:block">
                    <Icon
                      icon="vaadin:chevron-right"
                      className="text-brand-brown"
                    />
                  </div>
                </div>
                <ul className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0 text-brand-dark dark:text-brand-light">
                  <li>
                    <a href="https://www.linkedin.com/in/malone-derek/">
                      <Icon
                        icon="devicon-plain:linkedin"
                        className="hover:text-brand-teal transition-colors"
                      />
                    </a>
                  </li>
                  <li className="pl-2">
                    <a href="https://github.com/DerekMalone">
                      <Icon
                        icon="ant-design:github-filled"
                        className="hover:text-brand-teal transition-colors"
                      />
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
