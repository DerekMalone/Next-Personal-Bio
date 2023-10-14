import { CldImage } from "next-cloudinary";

const Profile = () => {
  // TODO: need to work on getting info listed.
  return (
    <>
      <section className='flex profile-component'>
        <div className='profile-photo'>
          <CldImage
            width={250}
            height={250}
            className='banner-image'
            src='Personal Bio Site/2021_11_20_NSS_0020_T_xlyxks.jpg'
            alt='Derek Malone Headshot'
          />
        </div>
        <article className=' border-solid justify-center'>
          <p className='justify-center text-center'>Personal info goes here.</p>
        </article>
      </section>
    </>
  );
};

export default Profile;
