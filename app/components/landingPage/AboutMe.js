import React from "react";
import TechStack from "../techstack/TechStack";

const AboutMe = () => {
  return (
    <div className='flex flex-col items-center py-16 md:py-20 lg:flex-row border-solid border-4 border-slate-500  '>
      <section className='w-full text-center sm:w-3/4 lg:2-3/5 lg: text-left'>
        <h4 className='font-header text-4xl font font-semibold uppercase basis-1/4 text-primary-green drop-shadow-lg p-3 sm:text-5xl lg:text-6xl'>
          Who AM I?
        </h4>
        <h5 className='pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl'>
          I'm Derek Malone, a Software Developer!
        </h5>
        <p className='pt-6 font-body leading-relaxed text-grey-20'>
          I am a passionate software developer with a knack for turning ideas
          into efficient and user-frinedly applications. Proficient in
          JavaScript, C#, Python, React, Next, ASP.NET, and Django with a focus
          in web development. Coached 520 students with a 92% module completion
          rate by delivering extensive intsruction in Web Development
          curriculum. I'm dedicated to creating software solutions that make a
          positive impact on people's lives. I thrive on tackling complex
          problems and continuously learning to stay at the forefront of
          technology. Effective communicator who enjoys collaborating with
          cross-functional teams to deliver top-notch software solutions.
        </p>
      </section>
      <TechStack />
    </div>
  );
};

export default AboutMe;
