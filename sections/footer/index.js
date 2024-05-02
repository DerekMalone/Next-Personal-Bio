import React from "react";

// TODO: also need to fix linkedin and github to center/be buttons...

const Footer = () => {
  return (
    <footer className='relative bg-blueGray-200 pt-8 pb-6'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap text-left lg:text-left'>
          <div className='w-full lg:w-6/12 px-4'>
            <h4 className='text-3xl font-semibold text-blueGray-700'>
              {`Let's keep in touch!`}
            </h4>
            <h5 className='text-lg mt-0 mb-2 text-blueGray-600'>
              Find me on any of these platforms.
            </h5>
            <div className='mt-6 lg:mb-0 mb-6'>
              <button
                className='bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'
                type='button'
              >
                <a
                  href='https://www.linkedin.com/in/malone-derek/'
                  className='pl-4 hover:text-yellow  h-10 w-10 items-center justify-center align-center rounded-full '
                >
                  {/* <box-icon
                    className='sm-linkedin-logo'
                    type='logo'
                    name='linkedin-square'
                    color='black '
                    size='2xl'
                  ></box-icon> */}
                  <i className='bx bxl-linkedin text-2xl text-black hover:text-yellow'></i>
                </a>
              </button>
              <button
                className='bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'
                type='button'
              >
                <a href='https://github.com/DerekMalone' className='pl-4'>
                  {/* <box-icon
                    className='sm-github-logo'
                    type='logo'
                    name='github'
                    color='black '
                    size='2xl'
                  ></box-icon> */}
                </a>
              </button>
            </div>
          </div>
          <div className='w-full lg:w-6/12 px-4'>
            <div className='flex flex-wrap items-top mb-6'>
              <div className='w-full lg:w-4/12 px-4 ml-auto'>
                <span className='block uppercase text-blueGray-500 text-sm font-semibold mb-2'>
                  Useful Links
                </span>
                <ul className='list-unstyled'>
                  <li>
                    <a
                      className='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'
                      href='/blog'
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'
                      href='https://github.com/DerekMalone'
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'
                      href='/attribution'
                    >
                      Resource Attribution
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='my-6 border-blueGray-300'>
          <div className='flex flex-wrap items-center md:justify-between justify-center'>
            <div className='w-full md:w-4/12 px-4 mx-auto text-center'>
              <div className='text-sm text-blueGray-500 font-semibold py-1'>
                Copyright © <span id='get-current-year'>2023</span>
                <a
                  href='/'
                  className='text-blueGray-500 hover:text-blueGray-800'
                >
                  {" "}
                  Derek Malone
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
