import React from "react";
import TechStack from "../techstack/TechStack";

const AboutMe = () => {
  return (
    <div className="border-solid border-4 border-slate-500 p-3 w-full className='justify-center text-center divide-y-4 divide-solid">
      <section className='flex justify-center'>
        <div className='divide-x-2 divide-solid'>
          <h4 className='basis-1/4 text-3xl text-slate-500 drop-shadow-lg'>
            Who AM I?
          </h4>
        </div>
        <h5 className='basis-3/4 text-xl'>
          I'm Derek Malone, a Software Developer!
        </h5>
      </section>
      <p className=''>
        I am a passionate software developer with a knack for turning ideas into
        efficient and user-frinedly applications. Proficient in JavaScript, C#,
        Python, React, Next, ASP.NET, and Django with a focus in web
        development. Coached 520 students with a 92% module completion rate by
        delivering extensive intsruction in Web Development curriculum. I'm
        dedicated to creating software solutions that make a positive impact on
        people's lives. I thrive on tackling complex problems and continuously
        learning to stay at the forefront of technology. Effective communicator
        who enjoys collaborating with cross-functional teams to deliver
        top-notch software solutions.
      </p>
      <TechStack />
    </div>
  );
};

export default AboutMe;
