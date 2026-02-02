import React, { useEffect, useState } from "react";
import TechStack from "@/components/techstack/TechStack";
import { getAboutMe } from "@/app/api/data/aboutMeData";

const AboutMe = () => {
  const [aboutMe, setAboutMe] = useState({});

  useEffect(() => {
    const loadData = async () => {
        try {
            const { data } = await getAboutMe();
            setAboutMe(data || {});
        } catch (err) {
            setError('Failed to load data');
        }
    };
    loadData();
}, []);

  return (
    <div className='flex flex-col items-center py-16 md:py-20 lg:flex-row shadow-lg'>
      <section className='w-full text-center sm:w-3/4 lg:2-3/5 lg:text-left'>
        <h4 className='font-header text-4xl font font-semibold uppercase basis-1/4 text-brand-forest dark:text-brand-teal drop-shadow-lg p-3 lg:ml-5 sm:text-5xl lg:text-6xl'>
          Who AM I?
        </h4>
        <h5 className='pt-6 font-header text-xl font-medium text-brand-dark dark:text-brand-light sm:text-2xl lg:text-3xl lg:ml-5 m-2'>
          {`I'm Derek Malone, a Software Developer!`}
        </h5>
        <p className='pt-6 font-body leading-relaxed text-brand-dark/80 dark:text-brand-light/80 lg:ml-5 m-5 whitespace-pre-wrap'>
          {aboutMe.bio}
        </p>        
      </section>
      <TechStack />
    </div>
  );
};

export default AboutMe;
