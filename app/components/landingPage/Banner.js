import { CldImage } from "next-cloudinary";

const Banner = () => {
  return (
    <div className='border-solid border-2 border-indigo-600 p-3 m-3'>
      <CldImage
        // fill={true}
        width={2000}
        height={190}
        className='banner-image'
        src='Personal Bio Site/IMG_6109_tfmtta_168a0c.jpg'
        alt='panorama of mountains'
      />
    </div>
  );
};

export default Banner;
