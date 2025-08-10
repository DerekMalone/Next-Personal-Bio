import React, { useEffect, useState } from "react";
import TechStack from "../techstack/TechStack";
import { getAboutMe } from "../../api/data/aboutMeData";

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
        <h4 className='font-header text-4xl font font-semibold uppercase basis-1/4 text-primary-green drop-shadow-lg p-3 lg:ml-5 sm:text-5xl lg:text-6xl'>
          Who AM I?
        </h4>
        <h5 className='pt-6 font-header text-xl font-medium text-black  sm:text-2xl lg:text-3xl lg:ml-5 m-2'>
          {`I'm Derek Malone, a Software Developer!`}
        </h5>
        <p className='pt-6 font-body leading-relaxed text-grey-20 lg:ml-5 m-5'>
          {aboutMe.bio}
        </p>        
      </section>
      <TechStack />
    </div>
  );
};

export default AboutMe;
