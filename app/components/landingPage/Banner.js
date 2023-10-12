import { CldImage } from "next-cloudinary";

const Banner = () => {
  return (
    <div>
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
