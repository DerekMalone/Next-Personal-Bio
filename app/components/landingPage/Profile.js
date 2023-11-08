import { CldImage } from "next-cloudinary";

const Profile = () => {
  // TODO: Once Supabase is set up, pull about me text from there and display.
  return (
    <>
      <section className='border-solid border-2 border-indigo-600 p-3 m-3 profile-component'>
        <article className='border-solid border-2 border-indigo-600 p-3 m-3 flex'>
          <div className='profile-photo'>
            <CldImage
              width={250}
              height={250}
              className='banner-image border-solid border-2 border-indigo-600 p-3 m-3'
              src='Personal Bio Site/2021_11_20_NSS_0020_T_xlyxks.jpg'
              alt='Derek Malone Headshot'
            />
          </div>
          <article className='border-solid border-2 border-indigo-600 p-3 m-3 w-full'>
            <p className='justify-center text-center'>
              {`I am a passionate software developer with a knack for turning
              ideas into efficient and user-frinedly applications. Proficient in
              JavaScript, C#, Python, React, Next, ASP.NET, and Django with a
              focus in web development. Coached 520 students with a 92% module
              completion rate by delivering extensive intsruction in Web
              Development curriculum. I'm dedicated to creating software
              solutions that make a positive impact on people's lives. I thrive
              on tackling complex problems and continuously learning to stay at
              the forefront of technology. Effective communicator who enjoys
              collaborating with cross-functional teams to deliver top-notch
              software solutions.`}
            </p>
          </article>
        </article>
      </section>
    </>
  );
};

export default Profile;
